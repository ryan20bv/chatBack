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
		res.json(chats);
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

		// io.emit("message", chat);

		res.json(chat);
	} catch (err) {
		console.log(err);
		res.status(500).send("Server Error");
	}
};

exports.getAllChat = getAllChat;
exports.addNewChat = addNewChat;
