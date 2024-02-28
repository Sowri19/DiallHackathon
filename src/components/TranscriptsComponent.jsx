import React, { useState, useEffect } from "react";
import axios from "axios";

const TranscriptsComponent = () => {
  const [transcripts, setTranscripts] = useState([]);

  useEffect(() => {
    const fetchTranscripts = async () => {
      try {
        // Replace 'YOUR_ZOOM_API_KEY' and 'YOUR_ZOOM_API_SECRET' with your actual Zoom API credentials
        const apiKey = "EaMnLHt6Rge5XWUyHwxrpQ";
        const apiSecret = "jmd6N214zSWdGJumBh1wiokubi81vsTg";
        const accessToken = btoa(`${apiKey}:${apiSecret}`);
        const response = await axios.get("https://api.zoom.us/v2/users", {
          headers: {
            Authorization: `Basic ${accessToken}`,
            "Content-Type": "application/json",
          },
        });
        setTranscripts(response.data);
      } catch (error) {
        console.error("Error fetching transcripts:", error);
      }
    };

    fetchTranscripts();
  }, []);

  return (
    <div>
      <h1>Transcripts</h1>
      <ul>
        {transcripts.map((transcript) => (
          <li key={transcript.id}>
            {/* Render transcript details */}
            {transcript}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TranscriptsComponent;
