var mongoose = require("../server/node_modules/mongoose/lib/index.js");
module.exports	=mongoose.model('categories',{
	id:Number,
	description:String
})