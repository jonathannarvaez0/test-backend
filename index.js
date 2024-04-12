const express = require("express");

const app = express();

app.get("/", (req, res) => {});

app.get("/home", (req, res) => {
  res.send("Welcome!");
});

app.post("/dates", (req, res) => {
  res.send(200);
});

app.listen(4500, () => console.log("running"));

module.exports = app;
