var express = require('express');
var router = express.Router();
var timeStamp = null;
let colorIndex = 0;
let colorIndex2 = 0;

router.get('/', function (req, res, next) {
  res.render('index', { title: 'express' });
});

router.get('/last.txt', (req, res, next) => {
  res.send(timeStamp);
  timeStamp = new Date().toISOString();

  // 4.3
  var logArray = [{ timeStamp: timeStamp }];
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "log-ro.json", true);
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.send(JSON.stringify(logArray));
});


router.get('/color.html', (req, res, next) => {
  let colors = ['red', 'yellow', 'green', 'blue'];
  colorIndex++;
  let colorName = colors[colorIndex - 1];
  colorIndex = colorIndex % (colors.length);
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

  const myTimeout = setTimeout(Logs, 10000);
});

// 4.2
router.get('/color.txt', (req, res) => {

  let colors = ['red', 'yellow', 'green', 'blue'];
  colorIndex2++;
  let colorName = colors[colorIndex2 - 1];
  colorIndex2 = colorIndex2 % (colors.length);
  res.send(colorName);
});

// 4.4
router.get('/contact.ajax', (req, res) => {
  const contact = '<a href = "https://myuni.adelaide.edu.au">contact us</a>';
  res.send(contact);
});

router.get('/search.ajax', (req, res) => {
  const search = '<input type = "text" placeholder = "Search"><button>search</button>';
  res.send(search);
});

router.get('/about.ajax', (req, res) => {
  const about = '<input type = "text" placeholder = "about"><button>about</button>';
  res.send(about);
});

// 4.6
let imageIndex = 0;
router.get('/images.json', (req, res) => {
  const images = require('../public/javascripts/images.js');
  const currentImage = images[imageIndex];
  imageIndex = (imageIndex + 1) % images.length;
  res.json(currentImage);
});

module.exports = router;