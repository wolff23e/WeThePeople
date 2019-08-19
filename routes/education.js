var express = require('express');
var router = express.Router();
const articles = require('../database')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('education', { title: 'Learn About the Constitution', articles });
});

module.exports = router;