const ChatModel = require("../models/chatModels");

/* 
	* @desc        		get all data for Chat
	! @serverRoute    Get "api/chat"
	!	@additionalRoute "/"
	? @access      		public
*/

const getAllChat = async (req, res, next) => {
	try {
		const chats = await ChatModel.find();

		res.status(200).json(chats);
	} catch (err) {
		console.log(err);
		res.status(500).send("Server Error");
	}
};

/* 
	* @desc        		add/send new chat to server
	! @serverRoute    POST "api/chat"
	!	@additionalRoute "/"
	? @access      		public
*/

const addNewChat = async (req, res, next) => {
	try {
		const { message, sender, receiver } = req.body;

		const chat = new ChatModel({
			message,
			sender,
			receiver,
		});

		await chat.save();

		res.status(201).json(chat);
	} catch (err) {
		console.log(err);
		res.status(500).send("Server Error");
	}
};

/* 
	* @desc        		delete chat to server
	! @serverRoute    delete "api/chat"
	!	@additionalRoute "/:chat_id"
	? @access      		public
*/

const deleteChat = async (req, res, next) => {
	const { chat_id } = req.params;
	console.log(chat_id);
	let foundChat;
	try {
		foundChat = await ChatModel.findById(chat_id);
	} catch (err) {
		console.log(err);
	}
	if (!foundChat) {
		console.log("No chat found");
		return;
	}
	await foundChat.deleteOne();
	res.status(200).json({ message: "delete successfully" });
};

exports.getAllChat = getAllChat;
exports.addNewChat = addNewChat;
exports.deleteChat = deleteChat;
