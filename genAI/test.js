import { GoogleGenAI } from "@google/genai";
import "dotenv/config";

export const AI = new GoogleGenAI({});

async function generateResponse() {
  try {
  } catch (error) {}

  const response = await AI.models.generateContent({
    model: process.env.MODEL, //"gemini-2.5-flash",
    contents: "Summarize the contents of Node.js in 3 bullet points",
  });

  // 1. Access the generated text directly
  console.log("Generated Answer:\n", response.text);
}

generateResponse();


