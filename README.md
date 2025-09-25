SS&RE personal project

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
