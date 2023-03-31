var express = require('express');
var router = express.Router();
var timeStamp = null;
var colorIndex = 0;
var colors = ['red', 'yellow', 'green', 'blue'];
colorIndex++;
var colorName = colors[colorIndex - 1];


router.get('/', function (req, res, next) {
  res.render('index', { title: 'express' });
});

router.get('/last.txt', (req, res, next) => {
  res.send(timeStamp);
  timeStamp = new Date().toISOString();
});


router.get('/color.html', (req, res, next) => {
  changeColor();
  function changeColor() {
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
    colorIndex = colorIndex % (colors.length);
    res.send(html);
  }
});

let Logs = [];

router.get('/log.html', (req, res) => {
  Logs.push(new Date().toString());
  let Dates = '';
  for (let i = 0; i < Logs.length; i++) {
    Dates += '<li>' + Logs[i] + '</li>';
  }
  let html = `
    <html>
    <head>
    <title>Log</title>
    </head>
    <body>
    <ul>${Dates}</ul>
    </body>
    </html>
    `;

  res.send(html);
});

// 4.2
router.get('/color.txt', (req, res, next) => {
  changeColor();
  function changeColor() {
    colorIndex = colorIndex % (colors.length);
    res.sendFile('../public/color2.html');
  }
});

module.exports = router;