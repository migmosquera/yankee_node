var express = require('express');
var router = express.Router();
var Model = require('../models/Model');

router.get('/', function (req, res, next) {
  if (req.session && req.session.user) {
    var data = req.session.user
    JSON.stringify(data)
    res.render('product', {
      firstName: data[0].firstName,
      lastName: data[0].lastName,
      typeUser: data[0].type_user.name
    });

  } else {
    res.render('index', { title: 'Yankee' });
  }

});

module.exports = router;