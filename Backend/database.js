import mysql from "mysql2";
import "dotenv/config.js";

const database = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

database.connect((err) => {
  if (err) {
    console.log("Database connection failed:", err);
  } else {
    console.log("MYSQL is connected.");
  }
});

export default database;
