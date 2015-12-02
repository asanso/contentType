var express = require("express");
var app = express();
app.set('port', (process.env.PORT || 5000));

var resource = {
	"helloWorld" : ""
};

app.get("/", function(req, res){
  var name = req.query.name;
  resource.helloWorld = name;

  res.send('{"helloWorld": "'+name+'"}');
  //res.json(resource);

});

var server = app.listen(app.get('port'), function() {
  var host = server.address().address;
  var port = port;
});
