import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import QuizPage from "./pages/QuizPage";
import HistoryPage from "./pages/HistoryPage";
import AdminPage from "./pages/AdminPage";
import TargetSchoolPage from "./pages/TargetSchoolPage";
import { useAppLock, AppLockScreen } from "./components/AppLock";

function App() {
  const { isUnlocked, unlock } = useAppLock();

  if (!isUnlocked) {
    return <AppLockScreen onUnlock={unlock} />;
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
