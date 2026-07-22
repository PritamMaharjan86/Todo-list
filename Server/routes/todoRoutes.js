import express from "express";

import { createTodo, getTodo } from "../models/todoModel";

const router = express.Router;

router.post("/", createTodo);

router.get("/", getTodo);

export default router;
