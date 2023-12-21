const express = require("express");
const app = express();
const { open } = require("express");
const path = require("path");
const dbPath = path.join(__dirname, "goodreads.db");
const sqlite3 = require("sqlite3");
const db = null;

const initializeDBAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
    app.listen(3000, () => {
      console.log("Server is Running at http://localhost:3000/");
    });
  } catch (e) {
    console.log(`Db Error: ${e.message}`);
    process.exit(1);
  }
};
initializeDBAndServer();
