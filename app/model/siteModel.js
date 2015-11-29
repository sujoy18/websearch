var mongoose = require('mongoose');
module.exports = mongoose.model('sites',{
	id:int,
	siteName:String,
	siteUrl:String,
	description:String,
	categoryIds:Array
})

moduel.exports	=mongoose.model('categories',{
	id:int,
	description:String
})