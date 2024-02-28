import React from 'react';
import PatientProfiles from './PatientProfiles'; // Import the PatientProfiles component

const profiles = [
  {
    id: 1,
    name: "John Doe",
    age: 35,
    gender: "Male",
    symptoms: ["Anxiety", "Insomnia", "Fatigue"],
    journey: "John started his treatment journey six months ago. Initially, he struggled with anxiety and insomnia. Through therapy and medication, he has made significant progress and now experiences fewer symptoms."
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 28,
    gender: "Female",
    symptoms: ["Depression", "Stress", "Headaches"],
    journey: "Jane's treatment journey began a year ago. She has been dealing with depression and stress, which have affected her daily life. With consistent therapy sessions and lifestyle changes, she has seen improvements in her mental health."
  },
  {
    id: 3,
    name: "Michael Johnson",
    age: 45,
    gender: "Male",
    symptoms: ["PTSD", "Anger Management", "Substance Abuse"],
    journey: "Michael's journey towards recovery started two years ago. He has been battling PTSD, anger management issues, and substance abuse. With the support of his therapist and rehabilitation programs, he has made steady progress in overcoming his challenges."
  }
];


const GuidedMeditation = () => {
  return (
    <div>
      <h2>Guided Meditation</h2>
      {/* Render the PatientProfiles component and pass profiles as prop */}
      <PatientProfiles profiles={profiles} />
    </div>
  );
};

export default GuidedMeditation;
