import * as TodoModel from "../models/todoModel";

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
