import database from "../config/database.js";

export const createTodo = (title, callback) => {
  database.query("insert into todos(title) values(?)", [title], callback);
};

export const getTodo = (callback) => {
  database.query("select * from todos", callback);
};

export const deleteTodo = (id, callback) => {
  database.query("delete from todos where id = ?", [id], callback);
};

export const updateTodo = (id, callback) => {
  database.query(
    "update todos set completed = not completed where id = ?",
    [id],
    callback,
  );
};

export const editTodo = (id, newTitle, callback) => {
  database.query(
    "update todos set title = ? where id = ?",
    [newTitle, id],
    callback,
  );
};

export const priorityTodo = (id, priority, callback) => {
  database.query("update todos set priority = ? where id = ?");
};
