var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('../views/index.html', { title: 'Express', message: 'Hello there!' });
});

//info page
router.get('/info', function(req, res, next) {
    res.render('../views/info.html', { title: 'info', message: 'Hello there!' });
});

module.exports = router;
