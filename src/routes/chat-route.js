const { Router } = require("express");
const {
	getAllChat,
	addNewChat,
	deleteChat,
} = require("../controllers/chat-cont");

const ChatRouter = Router();

/* 
	* @desc        		get all data for Chat
	! @serverRoute    Get "api/chat"
	!	@additionalRoute "/"
	? @access      		public
*/

ChatRouter.get("/", getAllChat);

/* 
	* @desc        		add/send new chat to server
	! @serverRoute    POST "api/chat"
	!	@additionalRoute "/"
	? @access      		public
*/

ChatRouter.post("/", addNewChat);

/* 
	* @desc        		delete chat to server
	! @serverRoute    delete "api/chat"
	!	@additionalRoute "/:chat_id"
	? @access      		public
*/
ChatRouter.delete("/:chat_id", deleteChat);

module.exports = ChatRouter;
