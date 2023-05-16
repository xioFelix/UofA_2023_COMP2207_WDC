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

/* 2.2 */
const logPostRequests = (req, res, next) => {
  if (req.method === "POST" && req.path.startsWith("/users")) {
    console.log("POST from a user");
  }
  next();
};
app.use(logPostRequests);


module.exports = router;
