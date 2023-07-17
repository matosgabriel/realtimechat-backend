import app from "express";
import http from "http";
import { Server } from "socket.io";

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("New user connected");

  socket.on("send_message", (message) => {
    console.log(message);
  });
});

server.listen(3333, () => {
  console.log("Running at 3333!");
});
