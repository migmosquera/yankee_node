var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  
  if (req.session && req.session.user) {
    var data = req.session.user
    JSON.stringify(data)
    console.log(data[0].username);
    res.render('client', { username: data[0].username });

  } else {
    res.render('index', { title: 'Yankee' });
  }

});
router.get('/getTypeClient', function (req, res, next) {
  console.log("paso por aqui")
});
module.exports = router;