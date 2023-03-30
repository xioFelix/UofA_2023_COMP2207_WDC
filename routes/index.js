var express = require('express');
var router = express.Router();
var timeStamp = null;
var colorIndex = 0;

router.get('/', function (req, res, next) {
  res.render('index', { title: 'express' });
});

router.get('/last.txt', (req, res, next) => {
  res.send(timeStamp);
  timeStamp = new Date().toISOString();
});


router.get('/color.html', (req, res, next) => {
  let colors = ['red', 'yellow', 'green', 'blue'];
  colorIndex++;
  let colorName = colors[colorIndex-1];
  const html = `
  <!DOCTYPE html>
  <html>
  <head>
    <title>Change Color</title>
  </head>
  <body>
  <h1 style="color:${colorName}">${colorName}</h1>
  </body>
  </html>
  `;
  console.log(colorIndex);
  colorIndex = colorIndex % (colors.length);
  res.send(html);
});

module.exports = router;