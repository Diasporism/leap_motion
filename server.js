var express = require('express');
var app     = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.render('index.html');
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Server listening on port %d in %s mode", this.address().port, app.settings.env);
});
