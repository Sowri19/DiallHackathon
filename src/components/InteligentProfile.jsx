import React, { useState } from 'react';
import './patient.css';

const IntelligentProfile = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    symptoms: '',
  });

  const [treatmentPlans, setTreatmentPlans] = useState([]);
  const [therapists, setTherapists] = useState([]); // State for available therapists
  const [showDialog, setShowDialog] = useState(false); // State to control dialog visibility

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you would typically make an API call to fetch treatment plans based on formData
    // For now, let's generate dummy treatment plans
    const dummyPlans = generateDummyTreatmentPlans(formData);
    setTreatmentPlans(dummyPlans);
    
    // Dummy therapist data for demonstration
    const dummyTherapists = [
      { id: 1, name: 'Dr. John Doe', specialization: 'Cognitive Behavioral Therapy' },
      { id: 2, name: 'Dr. Jane Smith', specialization: 'Mindfulness-Based Therapy' },
      { id: 3, name: 'Dr. Michael Johnson', specialization: 'Psychodynamic Therapy' },
    ];
    setTherapists(dummyTherapists);

    setShowDialog(true); // Show the dialog upon form submission
  };

  // Function to generate dummy treatment plans based on form data
  const generateDummyTreatmentPlans = (formData) => {
    const { name, age, symptoms } = formData;
    // Generate treatment plans based on patient's input
    // This is just a mock example, replace it with your actual logic or API call
    const plans = [];
    if (symptoms.toLowerCase().includes('headache')) {
      plans.push('Rest and pain relievers');
      plans.push('Stay hydrated and rest in a quiet, dark room');
    }
    if (age >= 65) {
      plans.push('Consult with a doctor for personalized treatment options due to age');
    }
    return plans;
  };

  // Function to handle sending details to therapist
  const handleSendDetails = (therapist) => {
    // Here, you can implement the logic to send details to the therapist
    // For now, let's display an alert
    alert(`Details sent to ${therapist.name} successfully!`);
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
          {/* <h2>Suggested Resources and Treatment Plans</h2>
          <ul>
            {treatmentPlans.map((plan, index) => (
              <li key={index}>{plan}</li>
            ))}
          </ul> */}
          <h2>Suggested Therapists</h2>
          <ul>
            {therapists.map((therapist) => (
              <li key={therapist.id}>
                {therapist.name} - {therapist.specialization}
                {/* <button onClick={() => handleSendDetails(therapist)}>Send Details</button> */}
              </li>
            ))}
          </ul>
          <button onClick={() => setShowDialog(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default IntelligentProfile;
