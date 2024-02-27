import React, { useState } from "react";
import axios from "axios";

function TextSummarizer() {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Updated API URL to use the 'completions' endpoint.
  const API_URL = "https://api.openai.com/v1/completions";

  const API_KEY = "";

  const handleSummarize = async () => {
    if (!text) {
      setError("Please enter some text");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await axios.post(
        API_URL,
        {
          model: "davinci-002", // Specify the model here
          prompt: `Summarize this: ${text}`,
          temperature: 0.5, // Adjusted for coherence
          max_tokens: 1500,
          top_p: 1.0,
          frequency_penalty: 0.0,
          presence_penalty: 0.0,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_KEY}`,
          },
        }
      );

      setSummary(response.data.choices[0].text);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text here..."
        style={{ width: "100%", height: "150px", marginBottom: "10px" }}
      />
      <button onClick={handleSummarize} disabled={!text || loading}>
        {loading ? "Summarizing..." : "Get Summary"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {summary && (
        <div>
          <h3>Summary</h3>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
}

export default TextSummarizer;
