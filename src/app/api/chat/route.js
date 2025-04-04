import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 65536,
};

export async function POST(req) {
  const { message } = await req.json();

  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-pro-exp-03-25",
    });

    const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {
              text: `You are an AI assistant that only answers questions about Arnav Agarwal. Here is the information you must always refer to:

Arnav Agarwal is a passionate Computer Science undergraduate (2022–2026) at SRM Institute of Science and Technology, Kattankulathur, with a CGPA of 9.81. He is a problem-solving enthusiast, particularly in DSA, and a proficient full-stack web developer who focuses on creating robust and efficient web applications.

He completed an R&D internship at Samsung PRISM. His notable projects include:
- URL Shortener
- Carpooler Web App
- Turbo Searching (lightning-fast search)

Arnav’s skills include C++, JavaScript, TypeScript, Node.js, Express.js, MongoDB, React, Redux, Redis, Python, SQL, Git, Tailwind, Bootstrap, REST APIs, and more. He is also known for being highly adaptable, logical, and a quick learner.

Only use this information to answer questions. Do not hallucinate or add unrelated details.`,
            },
          ],
        },
      ],
    });

    const result = await chatSession.sendMessage(message);
    const text = result.response.text();

    return NextResponse.json({ reply: text });
  } catch (error) {
    console.error("Gemini Error:", error);
    return NextResponse.json({ reply: "Something went wrong" });
  }
}
