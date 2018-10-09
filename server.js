const express = require("express");
const uuidv1 = require("uuid/v1");
const app = express();
const port = 3000;
const uuid = uuidv1();

let isDisableKeepAlive = false;

app.use((req, res, next) => {
  if (isDisableKeepAlive) {
    res.set("Connection", "close");
  }
  next();
});

app.get("/", (req, res) => {
  res.send(`I'm work! ${uuid}`);
});

const server = app.listen(port, () => {
  process.send("ready");
  console.log(`server is listening on port ${port}`);
});

process.on("SIGINT", () => {
  isDisableKeepAlive = true;
  server.close(() => {
    console.log(`server closed`);
    process.exit(0);
  });
});
