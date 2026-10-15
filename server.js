
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" }
});

const PORT = process.env.PORT || 3000;

let state = {
  votes1: 0,
  votes2: 0,
  seconds: 120,
  running: false,
  round: 1
};

// Serve arquivos da pasta public, se ela existir.
app.use(express.static(path.join(__dirname, "public")));

// Também permite abrir o index.html na raiz do projeto.
app.get("/", (_req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/health", (_req, res) => {
  res.json({ ok: true, service: "eleicao-dos-memes" });
});

io.on("connection", socket => {
  socket.emit("state", state);

  socket.on("admin-vote", ({ candidate, delta = 1 } = {}) => {
    if (candidate !== 1 && candidate !== 2) return;

    const key = candidate === 1 ? "votes1" : "votes2";
    const change = Math.max(-1, Math.min(1, Number(delta) || 1));

    state[key] = Math.max(0, state[key] + change);
    io.emit("state", state);
  });
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Eleição dos Memes rodando na porta ${PORT}`);
});
