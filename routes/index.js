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
  res.send('<a href = "https://www.outlook.com">Contact us</a>');
});

router.get('/search.ajax', (req, res) => {
  res.send(`<input type="text" placeholder="Search"><button>Search</button>`);
});

router.get('/about.ajax', (req, res) => {
  res.send(`<input type="text" placeholder="about"><button>about</button>`);
});

// 4.6

var images = [
  { uri:'photo-1539154444419-e31272d30a31.jpg', description:'medium-coated black-and-white dog near grass during daytime' },
  { uri:'photo-1553882809-a4f57e59501d.jpg',    description:'black and tan Belgian dog' },
  { uri:'photo-1554196721-b507d7e86ee9.jpg',    description:'gray dog standing on grass' },
  { uri:'photo-1555661059-7e755c1c3c1d.jpg',    description:'black dog behind plants' },
  { uri:'photo-1555991415-1b04a71f18c5.jpg',    description:'adult white Samoyed beside man and woman' },
  { uri:'photo-1558121591-b684092bb548.jpg',    description:'white and black dog lying on sofa' },
  { uri:'photo-1559440165-065646588e9a.jpg',    description:'person holding dog leash short-coat black and white dog' },
  { uri:'photo-1560160643-7c9c6cb07a8b.jpg',    description:'short-coated brown and white dog' },
  { uri:'photo-1562220058-1a0a019ab606.jpg',    description:'pet dog laying on sofa' },
  { uri:'photo-1565194481104-39d1ee1b8bcc.jpg', description:'short-coated gray dog' }
];

let currentIndex = 0;

router.get('/images.json', (req, res) => {
  const currentImage = images[currentIndex];
  currentIndex = (currentIndex + 1) % images.length;
  res.json(currentImage);
});

module.exports = router;