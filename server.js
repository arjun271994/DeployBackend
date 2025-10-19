const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>I am Server and git is success</h1>");
});

app.listen(3000, () => {
  console.log("Server is runnin on http://localhost:3000");
});
