var express = require('express');
var router = express.Router();
var Model = require('../models/Model');
var TypeClient= Model.TypeClient;
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
  TypeClient.findAll({})
    .then(typeClient => {
      res.send(typeClient);
    });
});
router.post('/saveClient', function (req, res) {
  const client = Client.build({
    firstName: req.query.firstName,
    lastName: req.query.lastName,
    dni: req.query.dni,
    phone: req.query.phone,
    limit: req.query.limit,
    typeClientId: req.query.typeClient,
  })
  client.save()
    .then(() => {
      res.send(client);
  });
  //console.log(req.query.firtName)
});

module.exports = router;