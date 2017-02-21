var express = require('express');
var morgan = require('morgan'); 
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var port = 8081; 
app.listen(8081, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
