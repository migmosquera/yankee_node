var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  
  if (req.session && req.session.user) {
    var data = req.session.user
    JSON.stringify(data)
    console.log(data.username);
    res.render('home', { user: req.session.user });

  } else {
    console.log("llego aqui")
    res.render('index', { title: 'Yankee' });
  }

});

module.exports = router;
