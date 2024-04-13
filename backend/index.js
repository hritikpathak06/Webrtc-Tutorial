const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "https://webrtc-tutorial-1.onrender.com",
    methods: ["GET", "POST"],
  },
});

const PORT = process.env.PORT || 5000;

// *******************************************************Deployemnt*******************************************************
const __dirname1 = path.resolve();
app.use(express.static(path.join(__dirname1, "frontend/build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"));
});

// *******************************************************Deployemnt*******************************************************

// Socket.IO connection handling
io.on("connection", (socket) => {
  console.log("User Conncetd: ", socket.id);
  socket.emit("me", socket.id);

  socket.on("disconnect", () => {
    socket.broadcast.emit("callended");
  });

  socket.on("calluser", ({ userToCall, signalData, from, name }) => {
    io.to(userToCall).emit("calluser",{ signal: signalData, from, name });
  });

  socket.on("answercall", (data) => {
    io.to(data.to).emit("callaccepted", data.signal);
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
