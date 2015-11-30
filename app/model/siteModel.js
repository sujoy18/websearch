var mongoose = require('mongoose');
module.exports = mongoose.model('sites',{
	siteName:String,
	siteUrl:String,
	description:String,
	categoryIds:Array
})

