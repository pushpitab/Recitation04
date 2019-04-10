var express = require('express');
var cors    = require('cors');
var app     = express();
var store   = [];
app.use(cors());


app.use(express.static('public'));
app.get('/add/:myname', function(req,res){
	// ------------------------------------------
	//  YOUR CODE
	//  create new object, add to store
	//  var obj = {first:first,last:last}
	//  
	//  return new object
    // ------------------------------------------
   console.log("got request ")
   var name  = req.params.myname
   
   console.log("name "+name)
  
   var message = 'hello from server to '+name
   console.log(message);

   res.send(message);
});

var port = 3000;
app.listen(port, function(){
	console.log('Server running on port: ' + port);
})