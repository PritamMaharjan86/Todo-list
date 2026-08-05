import express from "express";

import {
  createTodo,
  getTodo,
  deleteTodo,
  updateTodo,
  editTodo,
  priorityTodo,
} from "../controllers/todoController.js";

const router = express.Router();

router.post("/", createTodo);

router.get("/", getTodo);

router.delete("/:id", deleteTodo);

router.patch("/:id", updateTodo);

router.put("/:id", editTodo);

router.put("/:id", priorityTodo);

export default router;
