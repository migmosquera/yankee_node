var express = require('express');
var router = express.Router();
var Model = require('../models/Model');
var User = Model.User;
var typeUser = Model.TypeUser;
var md5 = require('md5');

router.get('/', function (req, res, next) {
  if (req.session && req.session.user) {
    var data = req.session.user
    JSON.stringify(data)
    res.render('user', {
      firstName: data[0].firstName,
      lastName: data[0].lastName,
      typeUser: data[0].type_user.name
    });

  } else {
    res.render('index', { title: 'Yankee' });
  }

});
router.get('/searchTypeUser', function (req, res) {
  typeUser.findAll({})
    .then(type_user => {
      res.send(type_user);
    })

});

router.get('/searchUser', function (req, res) {
  User.findAll({})
    .then(user => {
      res.send(user);
    })

});

router.post('/saveUser', function (req, res) {
  if (req.query.id != undefined) {
    console.log("llego aqui 1")
    User.findById(req.query.id)
      .then(user => {
        User.update({
          firstName: req.query.firstName,
          lastName: req.query.lastName,
          username: req.query.username,
          password: md5(req.query.password),
          phone: req.query.phone,
          typeUserId: req.query.typeUserId,
        })
          .then(() => {
            res.send(user);
          });
      });
  } else {

    const user = User.build({
      firstName: req.query.firstName,
      lastName: req.query.lastName,
      username: req.query.username,
      password: md5(req.query.password),
      phone: req.query.phone,
      typeUserId: req.query.typeUserId,
    })
    user.save()
      .then(() => {
        res.send(user);
      });
  }
});

module.exports = router;