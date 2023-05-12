var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


/* 1.1 */
app.get('/brew', (req, res) => {
    const { drink } = req.query;

    if (drink === 'tea') {
        res.send('A delicious cup of tea!');
    } else if (drink === 'coffee') {
        res.status(418).send('Coffee received');
    } else {
        res.status(400).send('Bad Request');
    }
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});



module.exports = app;
