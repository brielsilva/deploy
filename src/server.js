const express = require("express");

const server = express();

server.get("/", (req, res) => {
  res.end("Helllooo");
});

server.listen(3000, () => console.log("Running on 3000"));
