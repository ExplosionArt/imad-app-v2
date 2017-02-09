var express = require('express'); //Used to create the webserver so that we don't have to do the work of running, how to listen to port, handling http connections//
var morgan = require('morgan'); //Output logs of our server//
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {                          //When a get request is made to '/', function should execute//
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));   //Pick up ui/index.html and send the contents of that file//
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
