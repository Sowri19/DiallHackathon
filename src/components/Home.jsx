import React from 'react';
import TranscriptsComponent from './TranscriptsComponent';

const Home = () => {
  return (
    <div style={containerStyle}>
      <h1>Welcome to MindEase</h1>
      <div style={imageContainerStyle}>
        {/* Mindfulness Image */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={imageStyle}>
          <path fill="#4caf50" d="M12 2C6.48 2 2 6.48 2 12c0 3.53 2.31 6.5 5.5 7.53V20h-1.75c-.41 0-.75.34-.75.75s.34.75.75.75h7.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H16v-.47c3.19-1.03 5.5-4 5.5-7.53C22 6.48 17.52 2 12 2zm-5 8c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h3c.28 0 .5.22.5.5s-.22.5-.5.5h-3zm6 0c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5h-1zm-3 6c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm8 0c-.41 0-.75.34-.75.75s.34.75.75.75h1.75v1.75c0 .41.34.75.75.75s.75-.34.75-.75v-1.75h1.75c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-1.75v-1.75c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.75h-1.75c-.41 0-.75.34-.75.75s.34.75.75.75z"/>
        </svg>
        <TranscriptsComponent/>
           </div>
    </div>
  );
};

// Styles
const containerStyle = {
  textAlign: 'center',
  backgroundImage: 'url("background-image.jpg")', // Replace "background-image.jpg" with your image path
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh', // Ensure the container fills the viewport height
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

const logoStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50px',
  height: 'auto',
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
