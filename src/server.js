require("dotenv").config();
// console.log(process.env);
const express = require("express");
const PORT = process.env.PORT || 5001;
const app = express();

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
