import jwt from "jsonwebtoken";
import { ENV } from "./env.js";

export const generateToken = (userId, res) => {
  if (!ENV.JWT_SECRET) {
    throw new Error("JWT_SECRET is missing");
  }

  const token = jwt.sign({ userId }, ENV.JWT_SECRET, {
    expiresIn: "7d",
  });

  // ✅ REQUIRED for Render (backend) + Vercel (frontend)
  res.cookie("jwt", token, {
    httpOnly: true,
    secure: true,        // MUST be true (HTTPS)
    sameSite: "none",    // MUST be none for cross-origin
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
};
