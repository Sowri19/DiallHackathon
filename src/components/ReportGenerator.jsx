import React, { useState } from 'react';
import axios from 'axios';

const ReportGenerator = () => {
    const [reportContent, setReportContent] = useState(null);

    // Function to read text from a file
    const readTextFromFile = (filePath) => {
        try {
            return fetch(filePath).then(response => response.text());
        } catch (error) {
            console.error('Error reading file:', error);
            return null;
        }
    }

    // Function to interact with ChatGPT API and generate report
    const generateReport = async (inputText) => {
        try {
            // Make request to ChatGPT API
            const response = await axios.post('https://api.openai.com/v1/completions', {
                model: 'text-davinci-003', // Specify the model to use
                prompt: inputText, // Provide input text or prompt for generating response
                max_tokens: 150, // Set maximum number of tokens for response
                temperature: 0.7 // Set temperature for sampling (controls randomness)
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': '' // Replace with your API key
                }
            });

            // Extract and return response data
            return response.data.choices[0].text.trim();
        } catch (error) {
            console.error('Error:', error);
            return null;
        }
    }

    // Example usage
    const handleGenerateReport = async () => {
        const filePath = './test.txt'; // Replace with the path to your text file
        const inputText = await readTextFromFile(filePath);
        if (inputText) {
            const reportContent = await generateReport(inputText);
            setReportContent(reportContent);
        }
    }

    return (
        <div>
            <button onClick={handleGenerateReport}>Generate Report</button>
            {reportContent && <p>{reportContent}</p>}
        </div>
    );
}

export default ReportGenerator;
