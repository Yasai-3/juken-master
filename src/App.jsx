import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import QuizPage from "./pages/QuizPage";
import HistoryPage from "./pages/HistoryPage";
import AdminPage from "./pages/AdminPage";
import TargetSchoolPage from "./pages/TargetSchoolPage";
import {
  useAppLock,
  AppLockScreen,
  InitialPasswordSetupScreen,
} from "./components/AppLock";

function App() {
  const {
    isUnlocked,
    requiresPasswordChange,
    unlock,
    setInitialPassword,
    resetToDefaultPassword,
  } = useAppLock();

  if (!isUnlocked) {
    return (
      <AppLockScreen
        onUnlock={unlock}
        onReset={resetToDefaultPassword}
      />
    );
  }

  if (requiresPasswordChange) {
    return <InitialPasswordSetupScreen onSubmit={setInitialPassword} />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/target-schools" element={<TargetSchoolPage />} />
      </Routes>
    </Router>
  );
}

export default App;
