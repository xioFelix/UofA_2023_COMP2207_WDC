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


const mysql = require('mysql');

// 创建与数据库的连接
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'actors'
});

// 设置中间件来解析请求主体
app.use(express.json());

// 处理查询所有演员的请求
app.get('/actors', (req, res) => {
    // 执行数据库查询
    connection.query('SELECT * FROM actors', (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'An error occurred' });
        } else {
            res.json(results);
        }
    });
});

// 处理添加演员的请求
app.post('/actors', (req, res) => {
    const { firstName, lastName } = req.body;

    // 执行数据库插入操作
    connection.query('INSERT INTO actors (firstName, lastName) VALUES (?, ?)', [firstName, lastName], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'An error occurred' });
        } else {
            res.json({ id: result.insertId, firstName, lastName });
        }
    });
});



module.exports = app;
