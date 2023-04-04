require("dotenv").config();
// console.log(process.env);
const express = require("express");
const ConnectMongoDb = require("./databaseConnection/ConnectMongoDB");
const PORT = process.env.PORT || 5001;
const app = express();

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.listen(PORT, async () => {
	await ConnectMongoDb();
	console.log(`Listening on port ${PORT}`);
});
