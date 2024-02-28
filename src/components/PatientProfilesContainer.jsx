import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests
import PatientProfiles from './PatientProfiles'; // Assuming the component file is in the same directory

const PatientProfilesContainer = () => {
  // Dummy patient profiles data for demonstration
  const [profiles, setProfiles] = useState([
    {
      id: 1,
      name: 'John Doe',
      age: 35,
      gender: 'Male',
      symptoms: ['Anxiety', 'Depression'],
      journey: 'John has been experiencing anxiety and depression symptoms for the past few months.'
    },
    {
      id: 2,
      name: 'Jane Smith',
      age: 28,
      gender: 'Female',
      symptoms: ['Stress', 'Insomnia'],
      journey: 'Jane has been struggling with stress and insomnia due to work pressure.'
    }
    // Add more profiles as needed
  ]);
  const [showJourneyDialog, setShowJourneyDialog] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [reportContent, setReportContent] = useState('');

  const handleRequestPlan = async (profileId) => {
    try {
      // Make request to OpenAI API to generate report form
      const response = await axios.post('https://api.openai.com/v1/completions', {
        model: 'text-davinci-003', // Specify the model to use
        prompt: 'Generate report form for patient treatment plans', // Prompt for generating response
        max_tokens: 150, // Set maximum number of tokens for response
        temperature: 0.7 // Set temperature for sampling (controls randomness)
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer YOUR_OPENAI_API_KEY' // Replace with your OpenAI API key
        }
      });

      // Extract and set response data as report content
      setReportContent(response.data.choices[0].text.trim());
      setShowJourneyDialog(true);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleViewProfileJourney = (profile) => {
    setSelectedProfile(profile);
    setShowJourneyDialog(true);
  };

  return (
    <div>
      <h1>Therapist Dashboard</h1>
      <PatientProfiles profiles={profiles} onRequestPlan={handleRequestPlan} />
      {showJourneyDialog && (
        <div style={styles.dialogOverlay}>
          <div style={styles.dialogContent}>
            <h2>Report Form</h2>
            <div dangerouslySetInnerHTML={{ __html: reportContent }}></div>
            <button style={styles.closeButton} onClick={() => setShowJourneyDialog(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  dialogOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  dialogContent: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    textAlign: 'center'
  },
  closeButton: {
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '10px 20px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '20px'
  }
};

export default PatientProfilesContainer;
