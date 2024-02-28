import React, { useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState("");
  const [note, setNote] = useState("");

  const moods = ["😄", "😊", "😐", "😔", "😢", "😡"]; // Array of mood options

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
  };

  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Selected Mood:", selectedMood);
    console.log("Note:", note);
    setSelectedMood("");
    setNote("");
  };

  return (
    <div>
      <header style={headerStyle}>
        <h1>MindEase</h1>
      </header>
      <Navbar />
      <Home />
      <footer style={footerStyle}>
        <p>&copy; 2024 MindEase. All rights reserved.</p>
        <p>Contact us: info@mindease.com</p>
      </footer>
    </div>
  );
};

const headerStyle = {
  backgroundColor: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px 0",
};

const contentStyle = {
  padding: "20px",
};

const footerStyle = {
  backgroundColor: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px 0",
};

export default MoodTracker;
