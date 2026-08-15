import {AI} from './test.js';
import { Type } from '@google/genai';
/**
 * 1. Fetch Top 5 Trending Stories using Gemini 2.5 Flash with Google Search Grounding
 */
async function fetchTrendingStories() {
  console.log('🔍 Fetching top 5 trending stories of the day...');
  
  const prompt = `
    Find the top 5 most important and trending global news/tech stories of today.
    For each story, provide:
    1. A short headline
    2. An engaging Instagram caption with relevant hashtags
    3. A detailed visual prompt suitable for an AI image generator (photorealistic, editorial illustration, no text/typography in image).
  `;

  const response = await AI.
  models.generateContent({
    model: process.env.MODEL,
    contents: prompt,
    config: {
      tools: [{ googleSearch: {} }], // Enable Live Search Grounding
      responseMimeType: 'application/json',
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            headline: { type: Type.STRING },
            caption: { type: Type.STRING },
            imagePrompt: { type: Type.STRING }
          },
          required: ['headline', 'caption', 'imagePrompt']
        }
      }
    }
  });
  console.log(JSON.parse(response.text),'trending topics');
  return JSON.parse(response.text);
}

fetchTrendingStories()

