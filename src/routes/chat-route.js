const { Router } = require("express");
const { getAllChat } = require("../controllers/chat-cont");

const ChatRouter = Router();

/* 
	* @desc        		get all data for Chat
	! @serverRoute    Get "api/chat"
	!	@additionalRoute "/"
	? @access      		public
*/

ChatRouter.get("/", getAllChat);

module.exports = ChatRouter;
