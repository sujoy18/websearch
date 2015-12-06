var sites = require('../model/siteModel.js')
var category = require('../model/categories.js')
module.exports = function (app){
	app.get('/search',function(req, res){
		sites.find(function(err,result){
		   if(err){
		   	 return res.send(err);
		   }	
		   res.json(result)
		})
       
   })
	app.post('/addNews',function(req,res){
		sites.create({
				siteName:req.body.siteName,
				siteUrl:req.body.siteUrl,
				description:req.body.description,
				categoryIds:req.body.categoryIds
		},function(err, data){
				if(err)
					return res.send(err);
				return res.json(data);
		});
	})

	app.post('/addCategory',function(req,res){
			category.create({
				id:req.body.id,
				description:req.body.description

			},function(err,data){
				if(err){
					return res.send(err);
				}
				return res.json(data);
			})
	})
}