import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MoodTracker from "./components/MoodTracker";
import Profiles from "./components/Profiles";
import TherapistSupport from "./components/TherapistSupport";
import TherapyPlanner from "./components/TherapyPlanner";
import Ai from "./components/openai/Ai";
import IntelligentProfile from "./components/InteligentProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MoodTracker />} />
        <Route path="/summary" element={<Ai />} />
        <Route path="/intelligent-profile" element={<IntelligentProfile />} />
        <Route path="/profiles" element={<Profiles />} />
        <Route path="/therapist-support" element={<TherapistSupport />} />
        <Route path="/therapy-planner" element={<TherapyPlanner />} />
      </Routes>
    </Router>
  );
}

export default App;
