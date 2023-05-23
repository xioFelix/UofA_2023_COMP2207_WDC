var express = require('express');
var app = express();
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + "/public", { index: "actors.html" }));


var mysql = require('mysql');

// create a 'pool' (group) of connections to be used for connecting with our SQL server
var dbConnectionPool = mysql.createPool({
    host: 'localhost',
    database: 'actors'
});


// Connect to the database
app.use(function (req, res, next) {
    req.pool = dbConnectionPool;
    console.log("Successful connected to the database")
    next();
});



// Normal req to the index.html
app.use(logger('dev'));
app.use(express.json());


app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
