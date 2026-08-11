import { GoogleGenAI } from "@google/genai";
import 'dotenv/config';

const AI = new GoogleGenAI({});

async  function generateResponse(){
    const response = await AI.models.generateContent({
        model:"gemini-flash-latest",//"gemini-2.5-flash",
        contents:"Summarize the contents of Node.js in 3 bullet points"
    })
    

    console.log(response,'response');
}

generateResponse();