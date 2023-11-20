const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json); //  middleware to read the data in json format as it by default don't do that

app.get("/", (req, res) => {
  res.send("<h1>Hello from auth system</h1>");
});

app.post("/register", (req, res) => {
  const { firstname, lastname, email, password } = req.body;
});

module.exports = app;
