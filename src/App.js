import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MoodTracker from "./components/MoodTracker";
import GuidedMeditation from "./components/GuidedMeditation";
import TherapistSupport from "./components/TherapistSupport";
import Ai from "./components/openai/Ai";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MoodTracker />} />
        <Route path="/summary" element={<Ai />} />
        <Route path="/guided-meditation" element={<GuidedMeditation />} />
        <Route path="/therapist-support" element={<TherapistSupport />} />
      </Routes>
    </Router>
  );
}

export default App;
