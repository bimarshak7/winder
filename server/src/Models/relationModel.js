const mongoose = require("mongoose")


//		Symbol Deriving Graph
//
//				  -
//		U1	  -		U2
//				  -
//	-ve	<-------------------> +ve
//				  -
//				  -
//				  -

let MessagesSchema = mongoose.Schema({
	time: Date,
	content: String,
	sender: Boolean				// 1 = Sent by user2
								// 0  = Sent by user1
})

messages_model = mongoose.model("Messages", MessagesSchema);

let RelationSchema = mongoose.Schema({
	user1: String,
	user2: String,
	stat: Number,			// -1 = Liked as (U2 -> U1)
							// 1 = Liked as  (U1 -> U2)
							// 0 = Matched

	unread_count: Number,	// -1 = Sent by (U2 -> U1)
							// 1 = Sent by  (U1 -> U2)
							// 0 = All read

	messages: {
		msg: [{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Messages"
		}],
		clear: Boolean		// 1 = Clear for U2
							// 0 = Clear for U1
	}
})
relation_model = mongoose.model("Relation", RelationSchema);

module.exports.relationModel = relation_model;
module.exports.messagesModel = messages_model;