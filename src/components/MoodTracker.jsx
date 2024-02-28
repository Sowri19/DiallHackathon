import React, { useState } from "react";
import Home from "./Home";

const MoodTracker = () => {
  return (
    <div>
      <header style={headerStyle}>
        <h1>Mindfulness</h1>
      </header>
      <Home />
      <footer style={footerStyle}>
        <p>&copy; 2024 MindEase. All rights reserved.</p>
        <p>Contact us: info@mindease.com</p>
      </footer>
    </div>
  );
};

// Styles
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
