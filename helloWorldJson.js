var express = require("express");
var app = express();
var port = process.env.PORT;

var resource = {
	"helloWorld" : ""
};

app.get("/", function(req, res){
  var name = req.query.name;
  resource.helloWorld = name;

  res.send('{"helloWorld": "'+name+'"}');
  //res.json(resource);

});

var server = app.listen(port, 'localhost', function () {
  var host = server.address().address;
  var port = port;
});
