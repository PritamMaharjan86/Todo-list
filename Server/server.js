import express from "express";
import cors from "cors";
import "dotenv/config.js";
import database from "./config/database.js";
import todoRoutes from "./routes/todoRoutes";

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is working...");
});

app.use("/todos", todoRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${PORT}. `);
});
