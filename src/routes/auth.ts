import { Router } from "express";
import { prisma } from "../db";
import bcrypt from "bcrypt";

const r = Router(); // ★ 用 r，和 index.ts 統一

// 註冊
r.post("/register", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: "缺少 email 或 password" });

  const hash = await bcrypt.hash(password, 10);
  try {
    const user = await prisma.user.create({
      data: { email, passwordHash: hash },
    });
    res.json({ ok: true, user: { id: user.id, email: user.email } });
  } catch {
    res.status(400).json({ error: "Email 已被使用" });
  }
});

// 登入
r.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return res.status(401).json({ error: "帳號或密碼錯誤" });

  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) return res.status(401).json({ error: "帳號或密碼錯誤" });

  res.json({ ok: true, user: { id: user.id, email: user.email } });
});

export default r;
