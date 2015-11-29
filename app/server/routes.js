var sites = require('./model/site')

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
		
	})
}