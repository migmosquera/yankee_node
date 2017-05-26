var express = require('express');
var router = express.Router();
var Model = require('../models/Model');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Yankee' });
  
});

router.post('/', function (req, res) {
    console.log(req.body.title);
    console.log(req.body.description);
    res.render('index', { title: req.body.title });
});
router.post('/login', function (req, res) {
    
    res.send("envio");
});
module.exports = router;
