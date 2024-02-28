import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import IntelligentProfile from './InteligentProfile';
import TranscriptsComponent from './TranscriptsComponent';

const Home = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [loginType, setLoginType] = useState('');
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [loggedIn, setLoggedIn] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your login logic here
    console.log('Login data:', loginData);
    // Simulate successful login
    setLoggedIn(true);
  };

  const showLoginFormOnClick = (type) => {
    setShowLoginForm(true);
    setLoginType(type);
  };

  return (
    <div style={containerStyle}>
      <h1>Welcome to Diall</h1>
      <div style={imageContainerStyle}>
        {/* Mindfulness Image */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={imageStyle}>
          <path fill="#4caf50" d="M12 2C6.48 2 2 6.48 2 12c0 3.53 2.31 6.5 5.5 7.53V20h-1.75c-.41 0-.75.34-.75.75s.34.75.75.75h7.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H16v-.47c3.19-1.03 5.5-4 5.5-7.53C22 6.48 17.52 2 12 2zm-5 8c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h3c.28 0 .5.22.5.5s-.22.5-.5.5h-3zm6 0c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5h-1zm-3 6c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm8 0c-.41 0-.75.34-.75.75s.34.75.75.75h1.75v1.75c0 .41.34.75.75.75s.75-.34.75-.75v-1.75h1.75c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-1.75v-1.75c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.75h-1.75c-.41 0-.75.34-.75.75s.34.75.75.75z"/>
        </svg>
        {/* Conditionally render login buttons based on showLoginForm */}
        {!showLoginForm && (
          <div style={buttonContainerStyle}>
            <button onClick={() => showLoginFormOnClick('therapist')} style={buttonStyle}>Login as Therapist</button>
            <button onClick={() => showLoginFormOnClick('patient')} style={buttonStyle}>Login as Patient</button>
          </div>
        )}
        {/* Conditionally render login form based on showLoginForm and loggedIn */}
        {showLoginForm && !loggedIn && (
          <div style={loginFormContainerStyle}>
            <h2>Login as {loginType.charAt(0).toUpperCase() + loginType.slice(1)}</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Username:
                <input type="text" name="username" value={loginData.username} onChange={handleInputChange} />
              </label>
              <br />
              <label>
                Password:
                <input type="password" name="password" value={loginData.password} onChange={handleInputChange} />
              </label>
              <br />
              {/* Conditionally render different links based on the selected login type */}
              {loginType === 'patient' ? (
                <Link to="/intelligent-profile" style={{ marginTop: '20px' }}>Login </Link>
              ) : (
                <Link to="/guided-meditation" style={{ marginTop: '20px' }}>Login</Link>
              )}
            </form>
          </div>
        )}
      </div>
      <TranscriptsComponent />
    </div>
  );
};

// Define your styles here
const containerStyle = {
  textAlign: 'center',
  backgroundImage: 'url("background-image.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
};

const imageContainerStyle = {
  marginTop: '20px',
  position: 'relative', // Necessary for absolute positioning of the logo
};

const imageStyle = {
  width: '150px',
  height: '150px',
  animation: 'bounce 2s infinite alternate',
};

const buttonContainerStyle = {
  marginTop: '20px',
};

const buttonStyle = {
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  padding: '10px 20px',
  cursor: 'pointer',
  fontSize: '16px',
  margin: '0 10px',
  textDecoration: 'none',
};

const loginFormContainerStyle = {
  marginTop: '20px',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#fff',
  maxWidth: '400px',
  margin: '0 auto',
  color: '#333',
  textAlign: 'left',
};

// Define CSS animation keyframes
const keyframes = `
  @keyframes bounce {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-20px);
    }
  }
`;

// Inject CSS keyframes into the document
const styleTag = document.createElement('style');
styleTag.innerHTML = keyframes;
document.head.appendChild(styleTag);

export default Home;
