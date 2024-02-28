import React, { useState } from "react";
import "./patient.css"; // Ensure your CSS file is correctly referenced

const IntelligentProfile = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    symptoms: "",
  });
  const [treatmentPlans, setTreatmentPlans] = useState([]);
  const [therapists, setTherapists] = useState([]);
  const [showDialog, setShowDialog] = useState(false);
  const [todoItems, setTodoItems] = useState([]);
  const [currentTodo, setCurrentTodo] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dummyPlans = generateDummyTreatmentPlans(formData);
    setTreatmentPlans(dummyPlans);
    const dummyTherapists = [
      {
        id: 1,
        name: "Dr. John Doe",
        specialization: "Cognitive Behavioral Therapy",
      },
      {
        id: 2,
        name: "Dr. Jane Smith",
        specialization: "Mindfulness-Based Therapy",
      },
      {
        id: 3,
        name: "Dr. Michael Johnson",
        specialization: "Psychodynamic Therapy",
      },
    ];
    setTherapists(dummyTherapists);
    setShowDialog(true);
    alert("Details submitted successfully!");
  };

  const generateDummyTreatmentPlans = (formData) => {
    const { symptoms, age } = formData;
    const plans = [];
    if (symptoms.toLowerCase().includes("headache")) {
      plans.push(
        "Rest and pain relievers",
        "Stay hydrated and rest in a quiet, dark room"
      );
    }
    if (age >= 65) {
      plans.push(
        "Consult with a doctor for personalized treatment options due to age"
      );
    }
    return plans;
  };

  const handleTodoChange = (e) => {
    setCurrentTodo(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!currentTodo.trim()) return; // Prevent adding empty to-dos
    const newTodo = { task: currentTodo, completed: false };
    setTodoItems([...todoItems, newTodo]);
    setCurrentTodo(""); // Clear input after adding
  };

  const toggleTodoCompletion = (index) => {
    const updatedTodos = todoItems.map((item, idx) => {
      if (idx === index) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setTodoItems(updatedTodos);
  };

  const allTodosCompleted =
    todoItems.length > 0 && todoItems.every((item) => item.completed);

  const handleTodosSubmit = () => {
    alert("All todos completed and details sent!");
    // Here, you can implement further actions upon submitting all todos
  };
  return (
    <div className="profile-container">
      <h2>Patient Profile</h2>
      <form onSubmit={handleSubmit} className="profile-form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Symptoms:
          <textarea
            name="symptoms"
            value={formData.symptoms}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>

      {showDialog && (
        <div className="dialog">
          <h2>Suggested Therapists</h2>
          <ul>
            {therapists.map((therapist) => (
              <li key={therapist.id}>
                {therapist.name} - {therapist.specialization}
              </li>
            ))}
          </ul>
          <button onClick={() => setShowDialog(false)}>Close</button>
        </div>
      )}

      {/* <div className="todo-container" style={{ marginTop: "20px" }}>
        <h2>To-Do List</h2>
        <form
          onSubmit={handleAddTodo}
          style={{ display: "flex", gap: "10px", marginBottom: "20px" }}
        >
          <input
            type="text"
            value={currentTodo}
            onChange={handleTodoChange}
            placeholder="Add a new task"
            style={{
              flexGrow: 1,
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "8px 16px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              backgroundColor: "#007bff",
              color: "white",
            }}
          >
            Add To-Do
          </button>
        </form>
        <ul>
          {todoItems.map((item, index) => (
            <li
              key={index}
              style={{
                background: "#f8f9fa",
                padding: "8px",
                marginBottom: "8px",
                borderRadius: "4px",
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div> */}
      <div className="todo-container" style={{ marginTop: "20px" }}>
        <h2>To-Do List</h2>
        <form
          onSubmit={handleAddTodo}
          style={{ display: "flex", gap: "10px", marginBottom: "20px" }}
        >
          <input
            type="text"
            value={currentTodo}
            onChange={handleTodoChange}
            placeholder="Add a new task"
            style={{
              flexGrow: 1,
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "8px 16px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              backgroundColor: "#007bff",
              color: "white",
            }}
          >
            Add To-Do
          </button>
        </form>
        <ul>
          {todoItems.map((item, index) => (
            <li
              key={index}
              onClick={() => toggleTodoCompletion(index)}
              style={{
                textDecoration: item.completed ? "line-through" : "none",
                cursor: "pointer",
                listStyleType: "none",
                marginBottom: "8px",
              }}
            >
              {item.task}
            </li>
          ))}
        </ul>
        <button
          onClick={handleTodosSubmit}
          disabled={!allTodosCompleted}
          style={{
            padding: "8px 16px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            backgroundColor: allTodosCompleted ? "#28a745" : "#ccc",
            color: "white",
          }}
        >
          Submit Todos
        </button>
      </div>
    </div>
  );
};

export default IntelligentProfile;
