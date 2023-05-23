var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/actors', function (req, res, next) {

  //Connect to the database
  req.pool.getConnection(function (err, connection) {
    if (err) {
      res.sendStatus(500);
      return;
    }
    var query = "SELECT * FROM actor;";
    connection.query(query, function (err, rows, fields) {
      connection.release(); // release connection
      if (err) {
        res.sendStatus(500);
        return;
      }
      res.json(rows); //send response
    });
  });
});

router.post('/actors', function (req, res, next) {

  const actor = {
    first_name: req.body.first_name,
    last_name: req.body.last_name
  };

  req.pool.getConnection(function (err, connection) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    var query = "INSERT INTO actor (first_name, last_name) VALUES (?, ?)";
    connection.query(query, [actor.first_name, actor.last_name], function (err, result) {
      connection.release();
      if (err) {
        res.sendStatus(500);
        return;
      }

      res.json({ success: true });
    });
  });
});

module.exports = router;
