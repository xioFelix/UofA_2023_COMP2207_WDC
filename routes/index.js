var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

app.get('/actors', (req, res) => {
  // 处理查询所有演员的请求
  // 在此处执行数据库查询并返回演员数据的JSON响应
});

app.post('/actors', (req, res) => {
  // 处理添加演员的请求
  // 在此处获取POST请求中的演员数据，并将其存储到数据库中
  // 返回适当的响应，如成功添加的演员数据的JSON响应
});


module.exports = router;
