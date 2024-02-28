import React from "react";
import PatientProfiles from "./PatientProfiles";
import Navbar from "./Navbar";
const profiles = [
  {
    id: 1,
    name: "John Doe",
    age: 35,
    gender: "Male",
    symptoms: ["Anxiety", "Insomnia", "Fatigue"],
    journey:
      "John started his treatment journey six months ago. Initially, he struggled with anxiety and insomnia. Through therapy and medication, he has made significant progress and now experiences fewer symptoms.",
    transcript:
      "Therapist: How have you been feeling this week, John?\nPatient: I've had some trouble sleeping again, but it's not as bad as before.\nTherapist: It's good to hear it's improving. Let's explore what might be causing the insomnia and discuss strategies to help you sleep better.",
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 28,
    gender: "Female",
    symptoms: ["Depression", "Stress", "Headaches"],
    journey:
      "Jane's treatment journey began a year ago. She has been dealing with depression and stress, which have affected her daily life. With consistent therapy sessions and lifestyle changes, she has seen improvements in her mental health.",
    transcript:
      "Therapist: Jane, you mentioned experiencing some headaches recently. Can you tell me more about that?\nPatient: Yes, they usually happen during stressful times at work. It's been hard to manage.\nTherapist: Let's work on some stress relief techniques that you can use during those moments at work.",
  },
  {
    id: 3,
    name: "Michael Johnson",
    age: 45,
    gender: "Male",
    symptoms: ["PTSD", "Anger Management", "Substance Abuse"],
    journey:
      "Michael's journey towards recovery started two years ago. He has been battling PTSD, anger management issues, and substance abuse. With the support of his therapist and rehabilitation programs, he has made steady progress in overcoming his challenges.",
    transcript:
      "Therapist: Michael, how are you coping with your anger this week?\nPatient: I've been using the breathing techniques we discussed, and they help a bit.\nTherapist: That's a great step forward. Remember, it's a process, and you're making progress each day.",
  },
];

const Profiles = () => {
  return (
    <div>
      <Navbar />
      <PatientProfiles profiles={profiles} />
    </div>
  );
};

export default Profiles;
