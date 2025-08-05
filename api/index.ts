import { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  // Simple health check endpoint
  if (req.method === "GET") {
    res.status(200).json({
      message: "VoiceVision API is running",
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || "production",
    });
    return;
  }

  res.status(404).json({ error: "Not found" });
}
