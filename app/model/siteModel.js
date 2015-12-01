var mg = require("../server/node_modules/mongoose/lib/index.js");
module.exports = mg.model('sites',{
	siteName:String,
	siteUrl:String,
	description:String,
	categoryIds:Array
})

