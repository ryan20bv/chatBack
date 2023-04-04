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

exports.getAllChat = getAllChat;
