import React, { useState } from 'react';
import Navbar from './Navbar';
import Home from './Home';

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState('');
  const [note, setNote] = useState('');

  const moods = ['😄', '😊', '😐', '😔', '😢', '😡']; // Array of mood options

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
  };

  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform actions here, such as submitting the mood and note to a backend or storing in local storage
    console.log("Selected Mood:", selectedMood);
    console.log("Note:", note);
    // Reset form after submission
    setSelectedMood('');
    setNote('');
  };

  return (
    <div>
      {/* Header */}
      <header style={headerStyle}>
        <h1>Diall</h1>
      </header>
      <Navbar />
      <Home />
      {/* Footer */}
      <footer style={footerStyle}>
        <p>&copy; 2024 MindEase. All rights reserved.</p>
        <p>Contact us: info@mindease.com</p>
      </footer>
    </div>
  );
};

// Styles
const headerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px 0',
};

const contentStyle = {
  padding: '20px',
};

const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px 0',
};

export default MoodTracker;
