import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [loginType, setLoginType] = useState("");
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate(); // Use useNavigate hook here

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login data:", loginData);
    setLoggedIn(true); // Simulate successful login
    if (loginType === "patient") {
      navigate("/intelligent-profile"); // Navigate to patient profile
    } else if (loginType === "therapist") {
      navigate("/Profiles"); // Navigate to therapist dashboard
    }
  };

  const showLoginFormOnClick = (type) => {
    setShowLoginForm(true);
    setLoginType(type);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Welcome to Diall</h1>
      <div style={styles.content}>
        {!showLoginForm && (
          <div style={styles.buttonContainer}>
            <button
              onClick={() => showLoginFormOnClick("therapist")}
              style={styles.button}
            >
              Login as Therapist
            </button>
            <button
              onClick={() => showLoginFormOnClick("patient")}
              style={styles.button}
            >
              Login as Patient
            </button>
          </div>
        )}
        {showLoginForm && !loggedIn && (
          <div style={styles.formContainer}>
            <h2 style={styles.formHeader}>
              Login as {loginType.charAt(0).toUpperCase() + loginType.slice(1)}
            </h2>
            <form onSubmit={handleSubmit} style={styles.form}>
              <div style={styles.formGroup}>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={loginData.username}
                  onChange={handleInputChange}
                  style={styles.input}
                />
              </div>
              <div style={styles.formGroup}>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={loginData.password}
                  onChange={handleInputChange}
                  style={styles.input}
                />
              </div>
              <button type="submit" style={styles.submitButton}>
                Login
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    padding: "20px",
    backgroundColor: "#f0f2f5",
  },
  header: {
    marginBottom: "20px",
    color: "#333",
    fontSize: "24px",
  },
  content: {
    width: "100%",
    maxWidth: "360px", // Adjust the form width as needed
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // Center the buttons
  },
  button: {
    width: "100%", // Make buttons full width of the container
    backgroundColor: "#007bff",
    color: "white",
    padding: "10px 0", // Adjust padding for better aesthetics
    margin: "10px 0",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
  formContainer: {
    padding: "20px",
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // Center the form contents
    marginTop: "20px",
  },
  formHeader: {
    marginBottom: "15px",
    fontSize: "20px",
    color: "#333",
    alignSelf: "center", // Ensure the header is centered within the form
  },
  form: {
    width: "100%", // Make form take full width of its container
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // Center form fields
  },
  formGroup: {
    width: "100%", // Ensure form groups take full width for consistent alignment
    marginBottom: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // Center the input fields within the form group
  },
  input: {
    width: "100%", // Make inputs take the full width of the form group
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "14px",
    boxSizing: "border-box", // Ensure padding doesn't affect overall width
  },
  submitButton: {
    width: "100%", // Align the submit button's width with the input fields
    backgroundColor: "#28a745",
    color: "white",
    padding: "10px 0", // Adjust padding to match other buttons
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    marginTop: "10px", // Add some margin above the submit button
  },
};

export default Home;
