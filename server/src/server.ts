import express from "express";
import session from "express-session";
import passport from "./auth";
import { api } from "./routes";
import http from "http";
import { WebSocketServer } from "ws";

const app = express();

app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET || "dev-secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/api", api);

const server = http.createServer(app);

// WebSocket for leaderboard placeholder
const wss = new WebSocketServer({ server, path: "/ws" });
wss.on("connection", (ws) => {
  ws.send(JSON.stringify({ type: "leaderboard", data: [] }));
});

const PORT = Number(process.env.PORT) || 3000;
const HOST = process.env.HOST || "localhost";

server.listen(PORT, HOST, () => {
  console.log(`Server listening on http://${HOST}:${PORT}`);
});


