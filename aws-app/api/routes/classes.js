var express = require('express');
var router = express.Router();
var connection = require('../db')

/* GET classes page. */
router.get('/?', function(req, res, next) {
  //res.send('Getting all classes for user:' + req.query.uid);
  connection.query('SELECT * FROM users u , classes c, users_classes uc WHERE u.id = uc.uid AND c.id = uc.cid AND u.id = ' + req.query.uid, function (err, result, fields) {
    res.send(result);
    });
  //res.send('respond with a resource');
});

/* GET class page. */
router.get('/:id', function(req, res, next) {
  connection.query('SELECT * FROM classes c, meetings m, locations l WHERE c.id = m.cid AND m.lid = l.id AND c.id = ' + req.params.id, function (err, result, fields) {
    console.log(result);
    res.send(result);
    });
  //res.send('Getting class: ' + req.params.id);
});

module.exports = router;