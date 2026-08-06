import express from "express";

import {
  createTodo,
  getTodo,
  deleteTodo,
  updateTodo,
} from "../controllers/todoController.js";

const router = express.Router();

router.post("/", createTodo);

router.get("/", getTodo);

router.delete("/:id", deleteTodo);

router.patch("/:id", updateTodo);

export default router;
