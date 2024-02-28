import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MoodTracker from './components/MoodTracker';
import GuidedMeditation from './components/GuidedMeditation';
import TherapistSupport from './components/TherapistSupport';
import IntelligentProfile from './components/InteligentProfile';


function App() {
  return (
    
    <Router>
      <Routes> 
        <Route path="/" element={<MoodTracker />} />
        <Route path="/intelligent-profile" element={<IntelligentProfile/>} />
        <Route path="/guided-meditation" element={<GuidedMeditation />} />
        <Route path="/therapist-support" element={<TherapistSupport />} />
      </Routes>
    </Router>
  );
}

export default App;
