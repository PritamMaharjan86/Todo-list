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
