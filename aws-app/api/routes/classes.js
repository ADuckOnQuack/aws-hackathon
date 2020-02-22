var express = require('express');
var router = express.Router();
var connection = require('../db')

/* GET classes page. */
router.get('/?', function(req, res, next) {
  console.log(connection.query('SELECT * FROM '));
  res.send('Getting all classes for user:' + req.query.uid);
});

/* GET class page. */
router.get('/:id', function(req, res, next) {
  res.send('Getting class: ' + req.params.id);
});

module.exports = router;