var express = require('express');
var router = express.Router();
var connection = require('../db')

/* GET users listing. */
router.get('/', function(req, res, next) {
  connection.query('SELECT * FROM users', function (err, result, fields) {
    if (err) throw err;
    for (var i in result)
      console.log('Usernames: ', result[i].username);  
    });
  res.send('respond with a resource');
});

module.exports = router;
