import express from "express";
import routes from "./routes";

const app = express();
app.use(express.json());

// 所有route
app.use("/api", routes);

app.use(express.static("public"));

const port = Number(process.env.PORT || 3000);
app.listen(port, () => console.log(`http://localhost:${port}`));
