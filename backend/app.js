const express = require("express");
require("dotenv").config();

const User = require("./model/User");

const app = express();
app.use(express.json()); //  middleware to read the data in json format as  express by default don't do that

app.get("/", (req, res) => {
  res.send("<h1>Hello from auth system</h1>");
});

app.post("/register", (req, res) => {
  const { firstname, lastname, email, password } = req.body;

  if (!(firstname && lastname && email && password)) {
    res.status(400).send("All fields are mandatroy");
  }

  // to check existing user we use the query

  const existingUser = User.findOne({ email });

  if (existingUser) {
    res.status(401).send("User already exists");
  }
});

module.exports = app;
