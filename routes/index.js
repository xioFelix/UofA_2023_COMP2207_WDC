var express = require('express');
var router = express.Router();

var timeStamp = null;

router.get('/', function (req, res, next) {
  res.render('index', { title: 'express'});
});

router.get('/last.txt', (req, res, next) => {
  console.log(`Last access: ${timeStamp}`);
  timeStamp = new Date().toISOString();
});

module.exports=router;