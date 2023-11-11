const express = require("express"); // used to import the dependencies
const format = require("date-format");

const app = express();

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.status(201).send("<h1>hello from mansi</h1>");
});

app.get("/api/v1/instagram", (req, res) => {
  const instaSocial = {
    username: "mansi",
    foloowers: 200,
    followa: 1000,
    date: format.asString("dd[MM] - hh:mm:ss", new Date()),
  };

  res.status(200).json(instaSocial);
});

app.get("/api/v1/facebook", (req, res) => {
  const fackSocial = {
    username: "mansi_pra",
    followers: 2,
    followa: 0,
    date: format.asString("dd[MM] - hh:mm:ss", new Date()),
  };

  res.status(200).json(fackSocial);
});

app.get("/api/v1/facebook", (req, res) => {
  const fackSocial = {
    username: "mansi_pra",
    followers: 2,
    followa: 0,
    date: format.asString("dd[MM] - hh:mm:ss", new Date()),
  };

  res.status(200).json(fackSocial);
});

app.get("/api/v1/linkedin", (req, res) => {
  const linkedinSocial = {
    username: "mansi_prajapati",
    followers: 1220,
    followa: 200,
    date: format.asString("dd[MM] - hh:mm:ss", new Date()),
  };

  res.status(200).json(linkedinSocial);
});

app.listen(PORT, () => {
  console.log("Server listening...");
});
