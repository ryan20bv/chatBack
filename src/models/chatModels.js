const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const chatModel = new Schema({
	message: {
		type: String,
		required: true,
	},
	sender: {
		type: String,
		required: true,
	},
	receiver: {
		type: String,
		required: true,
	},
	createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Chat", chatModel);
