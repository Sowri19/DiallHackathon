// TherapistSupport.js
import React from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';


const TherapistSupport = ({ planTitle, planDescription, buttonText, onClick }) => {
  
  const handleNewUserMessage = (newMessage) => {
    // Here you can send the message to your backend and handle it with your chatbot service (e.g., Dialogflow)
    // For now, let's just echo back the user's message
    addResponseMessage(newMessage);
  };

  const handleButtonClick = () => {
    // Open the chat widget when the button is clicked
    const chatWidget = document.getElementById('chat-widget');
    chatWidget.style.display = 'block';
  };

  return (
    <div style={styles.card}>
      {/* Display the ChatbotLogo component */}

      <div style={styles.content}>
        <h2 style={styles.title}>{planTitle}</h2>
        <p style={styles.description}>{planDescription}</p>
        <button style={styles.button} onClick={handleButtonClick}>Chat with next available therapist</button>
        {/* Chat widget container */}
        <div id="chat-widget" style={{ display: 'none' }}>
          <Widget
            handleNewUserMessage={handleNewUserMessage}
            title="Therapist Support"
            subtitle="Chat with our therapist"
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    marginBottom: '16px',
    backgroundColor: '#f5f5f5',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    padding: '16px',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '8px',
  },
  description: {
    fontSize: '1rem',
    marginBottom: '8px',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '10px 20px',
    cursor: 'pointer',
    fontSize: '16px',
    '&:hover': {
      backgroundColor: '#0056b3',
    },
  },
};

export default TherapistSupport;
