# SS&RE personal project

Secure Login & User Authentication System
Objectives:
- Apply secure coding practices
- Implement strong authentication (hashing, MFA)
- Prevent vulnerabilities (SQL Injection, XSS)
- Perform security testing
Deliverables:
- Source Code (well-documented)
- Report (3–5 pages) on design, security measures, testing

## 開發環境 (Development Environment)

Operating System: Windows 11 / Ubuntu 24.04 LTS

Programming Language: TypeScript (Node.js 20 LTS)

Framework: Express.js

ORM: Prisma

Package Manager: npm

## 執行環境 (Runtime Environment)

Backend Server: Node.js (Express)

Database: MySQL 8 (containerized with Docker)

Container Management: Docker Compose

## 專案環境配置

啟用docker環境(DB)
```
docker compose up -d
```

安裝 & 產生 Prisma Client

```
npm install
npx prisma generate
```

第一次建表（migration）
```
npx prisma migrate dev --name init
```

開發啟動
```
npm run dev
```
