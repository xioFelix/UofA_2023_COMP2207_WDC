var express = require('express');
var router = express.Router();

/* 2.2 */
const logPostRequests = (req, res, next) => {
  if (req.method === "POST") {
    console.log("POST from a user");
  }
  next();
};
router.use(logPostRequests);

/* Init */
router.get('/', function (req, res, next) {
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

/* 3.1 */

module.exports = router;
