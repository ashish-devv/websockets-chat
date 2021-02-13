const express = require("express");
const socket = require("socket.io");

const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log("server Started Successfully");
});
const io = socket(server);
io.on("connection", (socket) => {
  console.log("made socket  connection", socket.id);

  socket.on("chat", (data) => {
    io.sockets.emit("chat", data);
  });
});
