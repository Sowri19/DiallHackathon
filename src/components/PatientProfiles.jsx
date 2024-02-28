import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TextSummarizer from './TextSummarizer';
const PatientProfiles = ({ profiles }) => {
  const [showReportDialog, setShowReportDialog] = useState(false);
  const [showTodoDialog, setShowTodoDialog] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [reportContent, setReportContent] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [error, setError] = useState(null);
  const API_KEY = "";
  
  const handleRequestPlan = async (profileId) => {
    try {
      const response = await axios.post('https://api.openai.com/v1/completions', {
        model: 'text-davinci-003',
        prompt: 'Generate a to-do list based on the patient profile',
        max_tokens: 100,
        temperature: 0.7
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer  ${API_KEY}'
        }
      });

      setTodoList(response.data.choices[0].text.trim().split('\n'));
      setShowTodoDialog(true);
      console.log(`To-Do list generated for profile with ID ${profileId}`);
    } catch (error) {
      setError(error);
      console.error('Error generating to-do list:', error);
    }
  };

  const handleViewProfileJourney = (profile) => {
    setSelectedProfile(profile);
    setShowReportDialog(true);
  };

  const generateReport = async () => {
    try {
      const response = await axios.post('https://api.openai.com/v1/completions', {
        model: 'text-davinci-003',
        prompt: `Generate a report for the patient profile: ${selectedProfile.name}`,
        max_tokens: 300,
        temperature: 0.7
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + API_KEY
        }
      });

      setReportContent(response.data.choices[0].text.trim());
    } catch (error) {
      setError(error);
      console.error('Error generating report:', error);
    }
  };

  const sendMsg = async (message) => {
    const API_URL = "https://api.openai.com/v1/chat/completions";
    try {
      const prompt = `Summarize the following meeting transcript into key takeaways and also generate todo list in points:\n\n${message}`;

      const response = await axios.post(
        API_URL,
        {
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content:
                "You are a helpful assistant asked to provide the key takeaways from a meeting transcript.",
            },
            {
              role: "user",
              content: prompt,
            },
          ],
          max_tokens: 2048,
          temperature: 0.5,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_KEY}`,
          },
        }
      );
      return response.data.choices[0].message.content;
    } catch (error) {
      console.error("Error calling OpenAI API:", error);
      throw error;
    }
  };

  useEffect(() => {
    if (showReportDialog && selectedProfile) {
      generateReport();
    }
  }, [showReportDialog, selectedProfile]);

  return (
    <div>
      <h2>Patient Profiles</h2>
      <div>
        {profiles.map(profile => (
          <div key={profile.id} style={styles.profileCard}>
            <div>
              <h3>{profile.name}</h3>
              <p><strong>Age:</strong> {profile.age}</p>
              <p><strong>Gender:</strong> {profile.gender}</p>
              <p><strong>Symptoms:</strong> {profile.symptoms.join(', ')}</p>
            </div>
            <div>
              <button style={styles.button} onClick={() => handleViewProfileJourney(profile)}>Generate AI report from transcript</button>
            </div>
          </div>
        ))}
      </div>
      {showReportDialog && (
        <div style={styles.dialogOverlay}>
          <div style={styles.dialogContent}>
            <h2>Profile Journey</h2>
            <p><strong>Name:</strong> {selectedProfile.name}</p>
            <p><strong>Profile Journey:</strong> {selectedProfile.journey}</p>
            <h2>Generated Report</h2>
            <TextSummarizer />  
            <button style={styles.closeButton} onClick={() => setShowReportDialog(false)}>Close</button>
          </div>
        </div>
      )}
      {showTodoDialog && (
        <div style={styles.dialogOverlay}>
          <div style={styles.dialogContent}>
            <h2>To-Do List</h2>
            {error ? (
              <p>Error generating to-do list: {error.message}</p>
            ) : (
              <ul>
                {todoList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
            <button style={styles.closeButton} onClick={() => setShowTodoDialog(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  profileCard: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    margin: '10px 0',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    justifyContent: 'space-between'
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '10px 20px',
    cursor: 'pointer',
    fontSize: '16px',
    marginRight: '10px'
  },
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
    fontSize: '16px'
  }
};

export default PatientProfiles;
