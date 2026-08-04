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
  TodoModel.updateTodo(id, (err) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.status(200).json({ message: "Todo updated successfully." });
  });
};

export const editTodo = (req, res) => {
  const { id } = req.params;
  const { newTitle } = req.body;

  TodoModel.editTodo(id, newTitle, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.status(200).json({
      message: "Successfully edited.",
      result,
    });
  });
};

export const priorityTodo = (req, res) => {
  const { id } = req.params;
  const { priority } = req.body;

  TodoModel.priorityTodo(id, priority, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.status(200).json({
      message: "Successfully edited.",
    });
  });
};
