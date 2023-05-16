var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
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

/* 1.2 */
let preMessage = 'first';

app.post('/pass-it-on', (req, res) => {
    const { message } = req.body;

    if (!message || message.trim() === '') {
        res.status(400).send('Bad Request');
    } else {
        const responseMessage = preMessage;
        preMessage = message;
        res.send(responseMessage);
    }
});

/* 1.3 */
app.post('/combine', (req, res) => {
    const { lines, suffix } = req.body;
    const output = lines.join('\n') + '\n' + suffix;

    res.send(output);
});
app.use(express.json());


/* npm status show */
app.listen(3000, () => {
    console.log('Server listening on port 3000');
});

module.exports = app;
