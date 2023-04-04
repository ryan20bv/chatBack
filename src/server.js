require("dotenv").config();
// console.log(process.env);
const express = require("express");
const ConnectMongoDb = require("./databaseConnection/ConnectMongoDB");
const PORT = process.env.PORT || 5001;
const app = express();

const ChatRouter = require("./routes/chat-route");
app.use("/api/chat", ChatRouter);

app.listen(PORT, async () => {
	await ConnectMongoDb();
	console.log(`Listening on port ${PORT}`);
});
