var express = require('express');
var app = express();
var http = require('http').Server(app);
var imageToAsciiConsole = require('ascii-images');
require('./SampleApplication/router.js')(app, express);

app.get('/', function(req, res){
	res.sendFile(__dirname + '/SampleApplication/Index/index.html');
});

var port = 3000;
http.listen(port, function(){		
	imageToAsciiConsole(__dirname + '/db1-logo.png', function(result){
  		console.log(result);
		console.log('Rodando em http://localhost:' + port);
	});
});