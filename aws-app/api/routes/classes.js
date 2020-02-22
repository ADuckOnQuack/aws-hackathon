var express = require('express');
var router = express.Router();

/* GET classes page. */
router.get('/?', function(req, res, next) {
  res.send('Getting all classes for user:' + req.query.uid);
});

/* GET class page. */
router.get('/:id', function(req, res, next) {
  res.send('Getting class: ' + req.params.id);
});

module.exports = router;