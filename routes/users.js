var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* 1.4 */
let posts = [];

// 处理POST请求
router.post('/addpost', (req, res) => {
  const post = req.body;
  posts.unshift(post); // 将新的博客文章添加到数组的开头
  res.status(200).send();
});

// 处理GET请求
router.get('/getposts', (req, res) => {
  res.json(posts); // 将所有博客文章的数据以JSON格式发送回客户端
});

module.exports = router;


module.exports = router;
