import database from "../config/database.js";

export const createTodo = (title, callback) => {
  database.query("insert into todos(title) values(?)", [title], callback);
};

export const getTodo = (callback) => {
  database.query("select * from todos", callback);
};
