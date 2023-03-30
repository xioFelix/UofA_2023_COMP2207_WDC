var express = require('express');
var router = express.Router();
var timeStamp = null;
var colorIndex = 0;

router.get('/', function (req, res, next) {
  res.render('index', { title: 'express' });
});

router.get('/last.txt', (req, res, next) => {
  res.send(timeStamp);
  var timeStamp = new Date().toISOString();
});


router.get('/color.html', (req, res, next) => {
  let colors = ['red', 'yellow', 'green', 'blue'];
  colorIndex++;
  let colorName = colors[colorIndex - 1];
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

  // 4.1
  function lastTime() {
    document.getElementById("lastTime").innerHTML = "Hello";
    const xhttp = new XMLHttpRequest();
    router.onload = function () {
      var timeP = document.getElementById("lastTime");
      router.open("GET", "./last.txt", true);
      router.send();
      timeP.innerHTML = "Fail to Change";
      timeP.innerHTML = this.responseText;
      console.log("Successfully use the xhttp function!");
    };

    console.log("Successfully use the lasttime function!");
  }

module.exports = router;