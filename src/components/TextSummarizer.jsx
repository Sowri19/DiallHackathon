import React, { useState } from "react";
import { sendMsg } from "./open";

function TextSummarizer() {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSummarize = async () => {
    if (!text) {
      setError("Please enter some text");
      return;
    }

    try {
      setLoading(true);
      setError("");
      const summaryResponse = await sendMsg(text);
      setSummary(summaryResponse);
    } catch (err) {
      console.error(err);
      setError(
        `Failed to generate summary. Please try again. Error: ${err.message}`
      );
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
      {!loading && !summary && !error && (
        <p>No summary available. Please enter text and click 'Get Summary'.</p>
      )}
    </div>
  );
}

export default TextSummarizer;
