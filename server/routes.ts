import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import nodemailer from "nodemailer";

type ContactBody = {
  name: string;
  email: string;
  message: string;
};

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  // Contact form endpoint
  app.post("/api/contact", async (req: Request<{}, {}, ContactBody>, res: Response) => {
    try {
      // Log headers and raw body to help debug client issues
      console.log("[contact] headers:", req.headers);
      console.log("[contact] rawBody:", (req as any).rawBody);

      const payload = req.body || {};
      const name = (payload.name || "").toString().trim();
      const email = (payload.email || "").toString().trim();
      const message = (payload.message || "").toString().trim();

      const errors: Record<string, string> = {};
      if (!name || name.length < 2) errors.name = "Name must be at least 2 characters.";
      // simple email regex
      const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !emailRe.test(email)) errors.email = "Please provide a valid email address.";
      if (!message || message.length < 10) errors.message = "Message must be at least 10 characters.";

      if (Object.keys(errors).length > 0) {
        return res.status(400).json({ message: "Validation failed", errors });
      }

      // If SMTP is not configured, log the message and return success (so site still works)
      if (!process.env.SMTP_HOST) {
        console.log("[contact] SMTP not configured. Received message:", { name, email, message });
        return res.json({ success: true, info: "SMTP not configured; message logged on server." });
      }

      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 587),
        secure: (process.env.SMTP_SECURE || "false") === "true",
        auth: process.env.SMTP_USER
          ? {
              user: process.env.SMTP_USER,
              pass: process.env.SMTP_PASS,
            }
          : undefined,
      });

      const toAddress = process.env.CONTACT_EMAIL || process.env.SMTP_USER;
      const mailOptions = {
        from: `${name} <${email}>`,
        to: toAddress,
        subject: `Website contact from ${name}`,
        text: `${message}\n\nFrom: ${name} <${email}>`,
        html: `<p>${(message || "").replace(/\n/g, "<br/>")}</p><p>From: ${name} &lt;${email}&gt;</p>`,
      };

      const info = await transporter.sendMail(mailOptions);
      return res.json({ success: true, info });
    } catch (err: any) {
      console.error("/api/contact error:", err);
      return res.status(500).json({ message: err?.message || "Failed to send message" });
    }
  });

  return httpServer;
}
