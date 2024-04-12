const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/dates", (req, res) => {
  res.send(200);
});

app.listen(4500, () => console.log("running"));
