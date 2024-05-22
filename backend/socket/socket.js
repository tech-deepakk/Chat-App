import { Server } from "socket.io";
import express from "express";
import http from "http";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["Get", "Post"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("the user connect is ", socket.id);

  socket.on("disconnec", () => {
    console.log("user disconnect ", socket.id);
  });
});

export { app, io, server };
