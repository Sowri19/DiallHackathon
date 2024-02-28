import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './patient.css';
import { sendMsg } from './open'; // Adjust the import path accordingly

const IntelligentProfile = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    symptoms: '',
  });

  const [treatmentPlans, setTreatmentPlans] = useState([]);
  const [showDialog, setShowDialog] = useState(false);
  const [generatedReport, setGeneratedReport] = useState('');
  const [generatedTodoList, setGeneratedTodoList] = useState([]);
  const [error, setError] = useState(null);
  const API_KEY = "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"; // Add your OpenAI API key here

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const message = `Patient symptoms: ${formData.symptoms}`;
      const response = await sendMsg(message); // Use sendMsg to generate the report and todo list
      const { report, todoList } = response;
      setTreatmentPlans(todoList);
      setGeneratedReport(report);
      setShowDialog(true);
    } catch (error) {
      setError(error);
      console.error('Error generating report and todo list:', error);
    }
  };

  return (
    <div className="profile-container">
      <h2>Patient Profile</h2>
      <form onSubmit={handleSubmit} className="profile-form">
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Age:
          <input type="number" name="age" value={formData.age} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Symptoms:
          <textarea name="symptoms" value={formData.symptoms} onChange={handleInputChange} />
        </label>
        <br />
        <button type="submit" className="submit-btn">Submit</button>
      </form>

      {showDialog && (
        <div className="dialog">
          <h2>Generated Report</h2>
          <p>{generatedReport}</p>
          <h2>Suggested Resources and Treatment Plans</h2>
          <ul>
            {treatmentPlans.map((plan, index) => (
              <li key={index}>{plan}</li>
            ))}
          </ul>
          <button onClick={() => setShowDialog(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default IntelligentProfile;
