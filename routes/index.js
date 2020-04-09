var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET About Us page. */
router.get('/about', (req, res) => {
  res.render('about');
});

/* GET Placement page. */
router.get('/placement', (req, res) => {
  res.render('placement');
});

router.get('/past-placement', (req, res) => {
  res.render('past-placement');
});

/* GET Why CET page. */
router.get('/whycet', (req, res) => {
  res.render('whycet');
});

/* GET gallery page. */
router.get('/gallery', (req, res) => {
  res.render('gallery');
});

/* GET register page. */
router.get('/register', (req, res) => {
  res.render('register');
});

/* GET contact us page. */
router.get('/contact', (req, res) => {
  res.render('contact');
});

module.exports = router;
