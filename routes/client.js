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
    res.render('client', { username: data[0].username });

  } else {
    res.render('index', { title: 'Yankee' });
  }

});
router.get('/listar', function (req, res) {
  console.log("llego aqui");
  TypeClient.findAll({})
    .then(typeClient => {
      res.send(typeClient);
    });
});
router.post('/saveClient', function (req, res) {
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
  //console.log(req.query.firtName)
});

module.exports = router;