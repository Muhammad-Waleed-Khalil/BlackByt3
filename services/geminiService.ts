import { GoogleGenAI } from "@google/genai";

// Initialize Gemini AI
// NOTE: The API key must be provided in the environment variables.
// This service handles the "AI & ML Solutions" logic if the site needs dynamic content generation.

const apiKey = process.env.API_KEY || '';

let ai: GoogleGenAI | null = null;

if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

export const generateSecurityReport = async (data: string): Promise<string> => {
  if (!ai) return "AI Module offline. API Key missing.";

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Analyze the following security log and provide a risk assessment: ${data}`,
    });
    return response.text || "Analysis failed.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error accessing AI mainframe.";
  }
};

export const chatWithBlackByt3Bot = async (message: string): Promise<string> => {
  if (!ai) return "AI Module offline.";
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `You are Black Byt3's autonomous sentinel. User asks: ${message}. Reply in a cyberpunk, terminal-style persona. Keep it brief.`,
    });
    return response.text || "...";
  } catch (error) {
    return "Connection interrupted.";
  }
};
