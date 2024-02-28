import React, { useState } from "react";
import { generateReport } from "./open";

const PatientProfiles = ({ profiles }) => {
  const [showReportDialog, setShowReportDialog] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [reportContent, setReportContent] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const generateReportFromTranscript = async (profile) => {
    setSelectedProfile(profile);
    setShowReportDialog(true);
    setIsLoading(true);
    try {
      const report = await generateReport(profile.transcript);
      setReportContent(report);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.error("Error generating report from transcript:", error);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h2>Patient Profiles</h2>
      <div>
        {profiles.map((profile) => (
          <div key={profile.id} style={styles.profileCard}>
            <div>
              <h3>{profile.name}</h3>
              <p>
                <strong>Age:</strong> {profile.age}
              </p>
              <p>
                <strong>Gender:</strong> {profile.gender}
              </p>
              <p>
                <strong>Symptoms:</strong> {profile.symptoms.join(", ")}
              </p>
            </div>
            <div>
              <button
                style={styles.button}
                onClick={() => generateReportFromTranscript(profile)}
              >
                Generate Report from Transcript
              </button>
            </div>
          </div>
        ))}
      </div>

      {showReportDialog && selectedProfile && (
        <div style={styles.dialogOverlay}>
          <div style={styles.dialogContent}>
            <div style={styles.dialogLeft}>
              <h3>{selectedProfile.name}</h3>
              <p>
                <strong>Journey:</strong> {selectedProfile.journey}
              </p>
              <p>
                <strong>Transcript:</strong>
              </p>
              <p style={styles.transcript}>{selectedProfile.transcript}</p>
            </div>
            <div style={styles.dialogRight}>
              <h3>Generated Report</h3>
              {isLoading ? (
                <p>Loading...</p>
              ) : error ? (
                <p>Error generating report: {error.message}</p>
              ) : (
                <>
                  <div style={styles.reportSection}>
                    <h4 style={styles.reportHeading}>Brief Report</h4>
                    <p style={styles.reportContent}>
                      {reportContent.split("Key Takeaways:")[0]}
                    </p>
                  </div>
                  <div style={styles.reportSection}>
                    <h4 style={styles.reportHeading}>Key Takeaways</h4>
                    <ul style={styles.takeawaysList}>
                      {reportContent
                        .split("Key Takeaways:")[1]
                        ?.trim()
                        .split(/\d\./)
                        .filter(Boolean)
                        .map((item, index) => (
                          <li key={index} style={styles.takeawayItem}>
                            {item.trim()}
                          </li>
                        ))}
                    </ul>
                  </div>
                </>
              )}
            </div>
            <button
              style={styles.closeButton}
              onClick={() => setShowReportDialog(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  profileCard: {
    background: "#ffffff",
    border: "none",
    borderRadius: "12px", // Increased for a softer, modern look
    padding: "24px", // Adjusted padding for more space around content
    margin: "20px 0",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.05), 0 6px 6px rgba(0, 0, 0, 0.1)", // Soften and layer shadows for depth
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    transition: "transform 0.3s ease-out, box-shadow 0.3s ease-out", // Smooth transitions for hover effects
    "&:hover": {
      transform: "translateY(-5px)", // Slight lift effect on hover
      boxShadow:
        "0 12px 24px rgba(0, 0, 0, 0.09), 0 8px 8px rgba(0, 0, 0, 0.15)", // Increase shadow depth on hover for a "pop" effect
    },
  },

  button: {
    marginTop: "10px",
    backgroundColor: "#007bff",
    color: "#ffffff",
    border: "none",
    borderRadius: "4px",
    padding: "8px 16px",
    cursor: "pointer",
    fontSize: "14px",
  },
  dialogOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  dialogContent: {
    background: "#ffffff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  closeButton: {
    marginTop: "20px",
    backgroundColor: "#dc3545",
    color: "#ffffff",
    border: "none",
    borderRadius: "4px",
    padding: "8px 16px",
    cursor: "pointer",
    fontSize: "14px",
  },
  transcript: {
    marginTop: "10px",
    padding: "10px",
    background: "#f8f9fa",
    borderRadius: "4px",
    border: "1px solid #e0e0e0",
    fontSize: "14px",
  },
};

export default PatientProfiles;
