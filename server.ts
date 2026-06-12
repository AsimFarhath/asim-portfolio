import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Standard initialization for Gemini
// Note the header setup as specified in the gemini-api skill
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

// Import resume data directly for system instructions
import { personalInfo, educationList, internshipsList, projectsList, certificationsList, skillsList } from "./src/data";

const app = express();
const PORT = 3000;

app.use(express.json());

// Prepare detailed resume text context for the model system instructions
const resumeContext = `
Representing Candidate: ${personalInfo.name}
Title: ${personalInfo.title}
Phone: ${personalInfo.phone}
Email: ${personalInfo.email}
Location: ${personalInfo.location}
Summary: ${personalInfo.summary}

EDUCATION:
${educationList.map(edu => `- ${edu.degree} from ${edu.institution} (${edu.period}). Details: ${edu.details}`).join("\n")}

INTERNSHIPS:
${internshipsList.map(intern => `
- Role: ${intern.role}
  Company: ${intern.company}, ${intern.location}
  Period: ${intern.period}
  Domain: ${intern.type}
  Details:
  ${intern.description.map(d => `  * ${d}`).join("\n")}
  Skills Learned: ${intern.skillsLearned.join(", ")}
`).join("\n")}

PROJECTS:
${projectsList.map(proj => `
- Title: ${proj.title}
  Period: ${proj.period}
  Organization: ${proj.organization}
  Location: ${proj.location}
  Tech Stack: ${proj.techStack.join(", ")}
  Core Description:
  ${proj.description.map(d => `  * ${d}`).join("\n")}
  Key Highlights:
  ${proj.highlights.map(h => `  * ${h}`).join("\n")}
`).join("\n")}

COURSES & CERTIFICATIONS:
${certificationsList.map(c => `- ${c.title} from ${c.provider} (${c.period})`).join("\n")}

TECHNICAL SKILLS:
${skillsList.map(group => `- ${group.category}: ${group.skills.join(", ")}`).join("\n")}
`;

const systemInstruction = `
You are the authorized AI Assistant & Recruiter Double for Asim Farhath H, a highly motivated and skilled Full Stack Web Developer.
Your job is to answer questions from hiring managers, recruiters, and prospective employers accurately, professionally, and warmly.

Guidelines:
1. ALWAYS base your answers STRICTLY on the real resume details of Asim:
${resumeContext}

2. Tone: Warm, professional, helpful, confident, and direct. Explain answers simply.
3. If asked about a skill, project, or experience that is not in his resume, confess politely that Asim does not have professional experience in it yet, but highlight that he possesses solid foundations in JavaScript, React.js, Node.js, Java, SQL databases, and is exceptionally fast at picking up new frameworks.
4. Keep answers concise, highly scannable, and formatted cleanly in Markdown (using bullet points and bold headers).
5. Never hallucinate emails or phone numbers; always refer to: asimfarhath9@gmail.com and +91 8248461679.
`.trim();

// API endpoint for chatbot
app.post("/api/chat", async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message is required." });
    }

    // Format optional history for Gemini chat if supplied
    const contents: any[] = [];
    if (history && Array.isArray(history)) {
      history.forEach((h: any) => {
        contents.push({
          role: h.sender === "user" ? "user" : "model",
          parts: [{ text: h.text }]
        });
      });
    }
    contents.push({
      role: "user",
      parts: [{ text: message }]
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: contents,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      }
    });

    const replyText = response.text || "I apologize, I'm currently unable to process your request. Please try again.";
    res.json({ text: replyText });
  } catch (error: any) {
    console.error("Error in /api/chat:", error);
    res.status(500).json({ 
      error: "Failed to communicate with AI model.", 
      details: error.message || error 
    });
  }
});

// API endpoint for JD matcher (structural JSON response)
app.post("/api/job-match", async (req, res) => {
  try {
    const { jd } = req.body;
    if (!jd) {
      return res.status(400).json({ error: "Job description is required." });
    }

    const matchPrompt = `
Evaluate the following Job Description (JD) against candidate Asim Farhath H's resume facts:

JOB DESCRIPTION:
"""
${jd}
"""

CANDIDATE FACTS:
"""
${resumeContext}
"""

Respond with a precise, constructive evaluation in JSON format only matching the exact properties described.
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: matchPrompt,
      config: {
        systemInstruction: "You are an expert HR recruiter and career fit evaluator. Return your response as a valid JSON object matching the exact requested schema.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          required: ["score", "matchSummary", "matchedSkills", "gaps", "fitVerdict", "prepSuggestion"],
          properties: {
            score: {
              type: Type.INTEGER,
              description: "Overall fit percentage score from 0 to 100 based on core mandatory skills in JD versus Asim's resume."
            },
            matchSummary: {
              type: Type.STRING,
              description: "A summary of 2-3 sentences explaining why Asim is a good fit and his strengths."
            },
            matchedSkills: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "List of technical skills from JD that match Asim's skillset."
            },
            gaps: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "List of skills or experiences mentioned in JD that Asim does not currently have listed, or optional nice-to-haves."
            },
            fitVerdict: {
              type: Type.STRING,
              description: "A professional recommendation level: Highly Compatible, Strong Match, Moderate Potential, or Foundation Match."
            },
            prepSuggestion: {
              type: Type.STRING,
              description: "A constructive tip for the recruiter on what interview topics to focus on to test Asim's core capabilities."
            }
          }
        }
      }
    });

    const jsonText = response.text?.trim() || "{}";
    const resultObj = JSON.parse(jsonText);
    res.json(resultObj);
  } catch (error: any) {
    console.error("Error in /api/job-match:", error);
    res.status(500).json({ 
      error: "Failed to evaluate job description.", 
      details: error.message || error 
    });
  }
});

// Setup Vite middleware on Express dev, or serve client static files on production
async function run() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    // Support SPA router index.html redirection
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running at: http://localhost:${PORT}`);
});
}

run();
