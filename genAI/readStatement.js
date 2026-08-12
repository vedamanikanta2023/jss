import "dotenv/config";
import { GoogleGenAI, Type } from "@google/genai";
import * as fs from "fs";
import * as path from "path";
import { AI } from "./test.js";

async function processBankStatement(filePath) {
  try {
    // 1. Read file as base64
    const fileBuffer = fs.readFileSync(filePath);
    const base64Data = fileBuffer.toString("base64");

    // Determine MIME type (application/pdf, image/png, image/jpeg, etc.)
    const ext = path.extname(filePath).toLowerCase();
    const mimeType =
      ext === ".pdf" ? "application/pdf" : `image/${ext.replace(".", "")}`;

    // 2. Request Gemini with Structured JSON Schema
    const response = await AI.models.generateContent({
      model: process.env.MODEL, //"gemini-2.5-flash",
      contents: [
        {
          inlineData: {
            mimeType: mimeType,
            data: base64Data,
          },
        },
        `Analyze this bank statement and extract key details into structured format.`,
      ],
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            bankName: { type: Type.STRING },
            accountNumber: { type: Type.STRING },
            accountHolder: { type: Type.STRING },
            statementPeriod: {
              type: Type.OBJECT,
              properties: {
                startDate: { type: Type.STRING },
                endDate: { type: Type.STRING },
              },
            },
            summary: {
              type: Type.OBJECT,
              properties: {
                openingBalance: { type: Type.NUMBER },
                closingBalance: { type: Type.NUMBER },
                totalDeposits: { type: Type.NUMBER },
                totalWithdrawals: { type: Type.NUMBER },
              },
            },
            recentTransactions: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  date: { type: Type.STRING },
                  description: { type: Type.STRING },
                  amount: { type: Type.NUMBER },
                  type: { type: Type.STRING, enum: ["CREDIT", "DEBIT"] },
                },
              },
            },
          },
        },
      },
    });

    // 3. Parse JSON result
    const extractedData = JSON.parse(response.text);
    console.log(
      "Extracted Statement Details:\n",
      JSON.stringify(extractedData, null, 2),
    );
  } catch (error) {
    console.error("Error processing statement:", error);
  }
}

// Run with your bank statement path
processBankStatement("F:/jss/genAI/mani_statement.pdf");
