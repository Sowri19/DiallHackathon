import axios from "axios";

export async function sendMsg(message) {
  const API_URL = "https://api.openai.com/v1/chat/completions";
  const API_KEY = "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";

  try {
    const prompt = `Summarize the following meeting transcript into key takeaways and also generate todo list in points:\n\n${message}`;

    const response = await axios.post(
      API_URL,
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "You are a helpful assistant asked to provide the key takeaways from a meeting transcript.",
          },
          {
            role: "user",
            content: prompt,
          },
        ],
        max_tokens: 2048,
        temperature: 0.5,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("Error calling OpenAI API:", error);
    throw error;
  }
}
export async function generateReport(message) {
  const API_URL = "https://api.openai.com/v1/chat/completions";
  const API_KEY = "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";

  try {
    const prompt = `Get the Brief report of the transcript, and mention key takeaways \n\n${message}`;

    const response = await axios.post(
      API_URL,
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "You are a helpful assistant asked to provide the key takeaways and report from a meeting transcript.",
          },
          {
            role: "user",
            content: prompt,
          },
        ],
        max_tokens: 2048,
        temperature: 0.5,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("Error calling OpenAI API:", error);
    throw error;
  }
}
