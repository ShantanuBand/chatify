import "dotenv/config";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";
import { ENV } from "./lib/env.js";
import { app, server } from "./lib/socket.js";

const PORT = ENV.PORT || 3000;

// 🔹 BODY PARSER
app.use(express.json({ limit: "5mb" }));

// 🔹 COOKIE PARSER (BEFORE ROUTES)
app.use(cookieParser());

// 🔹 CORS (EXACT FRONTEND ORIGIN ONLY)
app.use(
  cors({
    origin: ENV.CLIENT_URL, // e.g. https://chatify-rose-five.vercel.app
    credentials: true,
  })
);

// 🔹 ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// 🔹 START SERVER
server.listen(PORT, async () => {
  console.log("Server running on port:", PORT);
  await connectDB();
});
