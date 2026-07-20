import express from "express";
import cors from "cors";
import "dotenv/config.js";
import database from "./database.js";

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is working...");
});

app.post("/todos", (req, res) => {
  const { title } = req.body;

  database.query(
    "INSERT INTO todos(title) VALUES(?)",
    [title],
    (err, result) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        id: result.insertId,
        title: title,
      });
    },
  );
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${PORT}. `);
});
