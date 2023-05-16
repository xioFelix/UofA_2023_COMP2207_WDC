var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* 1.4 */
let posts = [];
router.post('/addpost', (req, res) => {
  const post = req.body;
  posts.unshift(post);
  res.status(200).send();
});

router.get('/getposts', (req, res) => {
  res.json(posts);
});

module.exports = router;


module.exports = router;
