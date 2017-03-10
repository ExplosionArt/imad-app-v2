var express = require('express');
var pg = require('pg');
var morgan = require('morgan'); 
var path = require('path');
var Pool = require('pg').Pool;      //For node postgres application//
var crypto = require('crypto');

var config = {
    user: 'explosionart',
    database: 'explosionart',
    host: 'db.imad.hasura-app.io',
    port: '5432',
    password: 'db-explosionart-26719'
};
//Environment variable named DB_PASSWORD to prevent hackers to directly access the password//
//During deployment, IMAD ensures deployment during use//

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter=0;
app.get('/counter', function(req, res) {
    counter=counter+1;
    res.send(counter.toString());           //The response always has to be in the form of a string//
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

function hash(input, salt) {
    //How do create a hash//
    var hashed = crypto.pbkdf2Sync(input,salt,10000,512,'sha512');
    return hashed.toString('hex');
}

app.get('/hash/:input', function (req, res) {
    var hashedString = hash(req.params.input, 'this-is-some-random-string');
    res.send(hashedString);
});


var pool = new pg.Pool(config);
app.get('/test-db', function(req,res) {
    //Make a select request
    pool.query('SELECT * from test', function(err,result) {
        if (err) {
            res.status(500).send(err.toString());
        }
        else {
            res.send(JSON.stringify(result.rows));
        }
    });
    //Return a response with the results
});

var names=[];
app.get('/submit-name', function (req, res) {
    //Get name from request//
    var name = req.query.name;
    names.push(name);
    //Convert array to string//
    //JSON: Javascript object notation//
    res.send(JSON.stringify(names));
});

var port = 8080; 
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
