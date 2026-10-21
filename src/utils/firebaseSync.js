// Firebase SDK (CDN / 軽量版) を使って外部バンドル不要でクラウド自動同期
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyBgw3RMnD8Lm0R0URtc7ZXKHQjnV_gS1qI",
  authDomain: "juken-master.firebaseapp.com",
  projectId: "juken-master",
  storageBucket: "juken-master.firebasestorage.app",
  messagingSenderId: "867441020559",
  appId: "1:867441020559:web:f115fbf5b8d1c14066aafa",
  measurementId: "G-CKMB2TLS5C"
};

const FIRESTORE_BASE_URL = `https://firestore.googleapis.com/v1/projects/${FIREBASE_CONFIG.projectId}/databases/(default)/documents`;
const DOC_NAME = 'user_data/primary_student';

// JavaScriptオブジェクトをFirestore REST API形式のJSONに相互変換
function toFirestoreValue(val) {
  if (val === null || val === undefined) return { nullValue: null };
  if (typeof val === 'boolean') return { booleanValue: val };
  if (typeof val === 'number') {
    return Number.isInteger(val) ? { integerValue: String(val) } : { doubleValue: val };
  }
  if (typeof val === 'string') return { stringValue: val };
  if (Array.isArray(val)) {
    return { arrayValue: { values: val.map(toFirestoreValue) } };
  }
  if (typeof val === 'object') {
    const fields = {};
    for (const [k, v] of Object.entries(val)) {
      fields[k] = toFirestoreValue(v);
    }
    return { mapValue: { fields } };
  }
  return { stringValue: String(val) };
}

function fromFirestoreValue(fVal) {
  if (!fVal || typeof fVal !== 'object') return null;
  if ('nullValue' in fVal) return null;
  if ('booleanValue' in fVal) return fVal.booleanValue;
  if ('integerValue' in fVal) return parseInt(fVal.integerValue, 10);
  if ('doubleValue' in fVal) return fVal.doubleValue;
  if ('stringValue' in fVal) return fVal.stringValue;
  if ('arrayValue' in fVal) {
    return (fVal.arrayValue.values || []).map(fromFirestoreValue);
  }
  if ('mapValue' in fVal) {
    const obj = {};
    for (const [k, v] of Object.entries(fVal.mapValue.fields || {})) {
      obj[k] = fromFirestoreValue(v);
    }
    return obj;
  }
  return null;
}

/**
 * クラウド（Firestore）から最新データを取得
 */
export async function fetchCloudData() {
  const url = `${FIRESTORE_BASE_URL}/${DOC_NAME}?key=${FIREBASE_CONFIG.apiKey}`;
  const res = await fetch(url);
  if (res.status === 404) {
    return null; // 初回はまだデータがない
  }
  if (!res.ok) {
    throw new Error(`Firestore読み込みエラー (${res.status})`);
  }
  const json = await res.json();
  const rawFields = json.fields || {};
  const data = {};
  for (const [k, v] of Object.entries(rawFields)) {
    data[k] = fromFirestoreValue(v);
  }
  return data;
}

/**
 * クラウド（Firestore）へ最新データを安全に保存（上書きマージ）
 */
export async function saveCloudData(payload) {
  const url = `${FIRESTORE_BASE_URL}/${DOC_NAME}?key=${FIREBASE_CONFIG.apiKey}`;
  const fields = {};
  for (const [k, v] of Object.entries(payload)) {
    fields[k] = toFirestoreValue(v);
  }
  const res = await fetch(url, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ fields }),
  });
  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Firestore保存エラー (${res.status}): ${errText}`);
  }
  return await res.json();
}
