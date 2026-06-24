import express from "express";
import cors from "cors";
import "dotenv/config.js";
import "./database.js";

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is working...");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${PORT}. `);
});
