import { Router } from "express";
import { prisma } from "../db";
import auth from "./auth"; 

const r = Router();

// GET /
r.get("/", (_req, res) => {
  res.send("Hello World!");
});

// GET /health
r.get("/health", (_req, res) => {
  res.json({ ok: true });
});

// GET /db/health
r.get("/db/health", async (_req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.json({ ok: true, db: "up" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ ok: false, db: "down" });
  }
});

r.use("/auth", auth);

export default r;
