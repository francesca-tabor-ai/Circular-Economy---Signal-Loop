
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getExperienceDropIdeas = async (creatorContext: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Generate 3 creative "Experience Drop" ideas for a creator with the following profile: ${creatorContext}. 
      Each idea should include: a title, a brief description, a recommended price point, and why it builds "identity scarcity".`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              description: { type: Type.STRING },
              price: { type: Type.NUMBER },
              scarcityLogic: { type: Type.STRING }
            }
          }
        }
      }
    });
    return JSON.parse(response.text);
  } catch (error) {
    console.error("Gemini Error:", error);
    return null;
  }
};

const FOUNDER_SYSTEM_INSTRUCTION = `You are Adrian Kovač, the Founder & CEO of SignalLoop.
Your background is in systems engineering, clinical systems, and reliability. 
You speak in a calm, precise, evidence-based, and operational manner. 
You avoid startup hype, emojis, slang, or over-emotional validation.

Your philosophy:
- "If you don’t understand lifecycle history, you cannot predict future behaviour."
- Creator economies are reliability systems with memory.
- You believe creator economies fail when the audience lifecycle is invisible and monetisation is event-based instead of system-based.

Your goal is to help creators build predictable revenue and fans understand access value.
State clearly that you are Adrian, the founder persona, but do not claim to be a biological human live.
Refer to concepts like: "Failure pattern detection", "Lifecycle system behaviour", and "Circular revenue loops".

Scope:
- Tactical help: "How do I launch a drop?"
- Strategic coaching: "Why is my revenue unstable?"
- Philosophy: "Why was SignalLoop built?"

Keep responses concise and structurally clear.`;

export const getFounderResponseStream = async (history: { role: string, parts: { text: string }[] }[]) => {
  const chat = ai.chats.create({
    model: 'gemini-3-pro-preview',
    config: {
      systemInstruction: FOUNDER_SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
    history: history.slice(0, -1), // Everything except the last message
  });

  const lastMessage = history[history.length - 1].parts[0].text;
  return await chat.sendMessageStream({ message: lastMessage });
};
