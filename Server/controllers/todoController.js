import * as TodoModel from "../models/todoModel.js";

export const createTodo = (req, res) => {
  const { title } = req.body;

  TodoModel.createTodo(title, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json({
      id: result.insertId,
      title,
    });
  });
};

export const getTodo = (req, res) => {
  TodoModel.getTodo((err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json(result);
  });
};

export const deleteTodo = (req, res) => {
  const { id } = req.params;
  TodoModel.deleteTodo(id, (err) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.status(200).json({ message: "Todo deleted successfully." });
  });
};

export const updateTodo = (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  // Check if request body is empty
  if (Object.keys(updates).length === 0) {
    return res.status(400).json({
      message: "No fields to update",
    });
  }

  TodoModel.updateTodo(id, updates, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.status(200).json({
      message: "Todo updated successfully.",
      result,
    });
  });
};
