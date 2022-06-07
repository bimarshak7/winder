const path = require("path")
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") })

const mongoose = require("mongoose")

/*
Ensures commands execute only to real database
Not store in buffer and execute after connection made
*/
// mongoose.set('bufferCommands', false);


/*
		Connect to Database at the beginning
		Because all other functions depend on this
		Or make seperate file to initiate connection
		and export all needed functions?
*/
db_instance = mongoose.createConnection(process.env.MONGO_URI,
				 {
				 	useNewUrlParser: true,
				 	useUnifiedTopology: true,
				 })


module.exports = db_instance