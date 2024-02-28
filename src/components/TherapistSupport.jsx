import React from 'react';

const TherapistSupport = ({ planTitle, planDescription, buttonText, onClick }) => {
  return (
    <div style={styles.card}>
      <div style={styles.content}>
        <h2 style={styles.title}>Hello</h2>
        <p style={styles.description}>efbfhkhfhfkhfkhekfhkwfhfhkfhkehfkehfkherkehrkhekhkhkwhekhwk</p>
        <button style={styles.button} onClick={onClick}>{buttonText}</button>
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
