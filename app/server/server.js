var express =require('express');
var app = new express();
var mongodb = require("mongoose");
var db=require("../config/db.js");
mongodb.connect(db.url);
var db = mongodb.connection;

// Add headers
cors = require('cors')
app.use(cors());
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
var bodyParser = require('body-parser');  // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
app.use(bodyParser.urlencoded({'extended':'true'}));      // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                   // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());
var sites = [

  {

      "id": 1,

      "siteName": "GizMag",

      "siteUrl": "www.gizmag.com",

      "description": "This is the description for Gizmag",

      "categoryIds": [

          2

      ]

  },

  {

      "id": 2,

      "siteName": "Ebay",

      "siteUrl": "www.ebay.com.au",

      "description": "This is the description for ebay",

      "categoryIds": [

          1

      ]

  },

  {

      "id": 3,

      "siteName": "Robs UI Tips",

      "siteUrl": "www.awesomeui.com.au",

      "description": "This is the description for the best site in the world. It is the best:). Iohannis beat frontrunner Ponta in the weekend’s presidential election, promising in his campaign to step up Romania’s fight against corruption and make it a more attractive place for foreign investors.He scored an early victory on Tuesday when parliament bowed to his calls to scrap legislation aimed at keeping politicians out of jail, which was introduced last year to relieve pressure on overcrowded prisons but sparked outrage.",

      "categoryIds": [

          4, 3

      ]

  },

  {

      "id": 4,

      "siteName": "Table Tennis Tips - How to not come runners up",

      "siteUrl": "www.ttt.com",

      "description": "This is the description for Table Tennis Tips, Iohannis beat frontrunner Ponta in the weekend's presidential election, promising in his campaign to step up Romania’s fight against corruption and make it a more attractive place for foreign investors.",

      "categoryIds": [

          1, 2, 3, 4

      ]

  }

]

var categories = [

  {

      id: 1,

      description: 'Arts & Entertainment'

  },

  {

      id: 2,

      description: 'Automotive'

  },

  {

      id: 3,

      description: 'Business'

  },

  {

      id: 4,

      description: 'Careers'

  }

];

var router = require('./routes.js')(app);
app.listen(3000,function(){
	console.log('Server running at port 3000');
});





