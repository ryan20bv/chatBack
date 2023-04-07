require("dotenv").config();
const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
// console.log(process.env);

const ConnectMongoDb = require("./databaseConnection/ConnectMongoDB");
const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server, {
	cors: {
		origin: "http://localhost:3000",
		credentials: true,
	},
});

const ChatRouter = require("./routes/chat-route");
app.use("/api/chat", ChatRouter);

// app.post("/api/chat", ChatRouter);

// app.listen(PORT, async () => {
// 	await ConnectMongoDb();
// 	console.log(`Listening on port ${PORT}`);
// });

// Define socket.io event handlers
io.on("connect", (socket) => {
	console.log("A user connected.");
	// console.log("here");

	// Listen for 'chatMessage' event
	socket.on("message", (data) => {
		// console.log("data", data);
		// Emit 'chatMessage' event to all connected clients
		io.emit("message", data);
	});
	// is typing
	socket.on("typing", (user) => {
		console.log(`${user} is typing...`);
		io.emit("typing", user);
	});

	// stop typing
	socket.on("stop-typing", (user) => {
		io.emit("stop-typing", user);
	});

	// Handle disconnect event
	socket.on("disconnect", () => {
		console.log("A user disconnected.");
	});
});

server.listen(PORT, async () => {
	await ConnectMongoDb();
	console.log(`Listening on port:: http://localhost:${PORT}/`);
});
// server.on("listening", async () => {
// 	await ConnectMongoDb();
// 	console.log(`Listening on port:: http://localhost:${PORT}/`);
// });
