import React, { useState } from "react";
import { sendMsg } from "./open";

const Takeaways = () => {
  const [takeaways, setTakeaways] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateTakeaways = async () => {
    const transcripts =
      "Therapist: How are you feeling today?\nPatient: I'm feeling a bit anxious.";
    setIsLoading(true); // Start loading
    try {
      const takeawaysGenerated = await sendMsg(transcripts);
      setTakeaways(takeawaysGenerated);
    } catch (error) {
      console.error("Failed to generate takeaways:", error);
    } finally {
      setIsLoading(false); // Ensure loading is stopped regardless of the outcome
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.left}>
        <h2>Therapist and Patient Transcripts</h2>
        <p>Therapist: How are you feeling today?</p>
        <p>Patient: I'm feeling a bit anxious.</p>
        {/* Add more transcripts here */}
      </div>

      <div style={styles.right}>
        <h2>Takeaways and Highlights</h2>
        <button style={styles.button} onClick={handleGenerateTakeaways}>
          Generate Takeaways
        </button>
        {isLoading && <div style={styles.loader}>Loading...</div>}
        {!isLoading && takeaways && (
          <div style={styles.takeawaysContainer}>
            {takeaways.split("\n").map((point, index) => (
              <div
                key={index}
                style={{
                  ...styles.takeawayPoint,
                  backgroundColor: index % 2 === 0 ? "#dff0d8" : "#f2dede",
                }}
              >
                {point}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    marginBottom: "16px",
    backgroundColor: "#f5f5f5",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    padding: "16px",
  },
  left: {
    flex: "50%",
    padding: "10px",
    borderRight: "1px solid #ddd",
  },
  right: {
    flex: "50%",
    padding: "10px",
  },
  button: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    padding: "10px 20px",
    cursor: "pointer",
    fontSize: "16px",
    marginBottom: "10px",
  },
  loader: {
    margin: "10px 0",
    // Customize your loader style here
  },
  takeawaysContainer: {
    padding: "10px",
    backgroundColor: "#e9ecef",
    borderRadius: "5px",
  },
  takeawayPoint: {
    padding: "10px",
    margin: "5px 0",
    borderRadius: "4px",
  },
};

export default Takeaways;
