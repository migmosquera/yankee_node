var express = require('express');
var router = express.Router();
var Model = require('../models/Model');
var TypeClient = Model.TypeClient;
var Client = Model.Client;

/* GET users listing. */
router.get('/', function (req, res, next) {
  if (req.session && req.session.user) {
    var data = req.session.user
    JSON.stringify(data)
    console.log(data[0].firstName)
    res.render('client', { 
      firstName: data[0].firstName,
      lastName: data[0].lastName
    });

  } else {
    res.render('index', { title: 'Yankee' });
  }

});
router.get('/searchClientByName', function (req, res) {
  Client.findAll({})
    .then(client => {
      res.send(client);
    })
});
router.post('/saveClient', function (req, res) {
  if (req.query.id != undefined) {
    Client.findById(req.query.id)
      .then(client => {
        client.update({
          firstName: req.query.firstName,
          phone: req.query.phone,
          address: req.query.address,
          limit_drink: req.query.limit_drink,
          limit_food: req.query.limit_food,
          client_vip: req.query.client_vip,
        })
          .then(() => {
            res.send(client);
          });
      });
  } else {
    const client = Client.build({
      firstName: req.query.firstName,
      phone: req.query.phone,
      address: req.query.address,
      limit_drink: req.query.limit_drink,
      limit_food: req.query.limit_food,
      client_vip: req.query.client_vip,
    })
    client.save()
      .then(() => {
        res.send(client);
      });
  }

});

module.exports = router;