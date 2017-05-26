var express = require('express');
var router = express.Router();
var Model = require('../models/Model');
var User = Model.User;
var md5 = require('md5');

function authenticate(name, pass, fn) {
    if (!module.parent) console.log('authenticating %s:%s', name, pass);
    User.findAll({ where: { username: name, password: pass } })
        .then(user => {
            if (user.length != 0) {
                return fn(null, user)
            } else {
                return fn(null, false)
            }
        });
}
router.get('/', function (req, res, next) {
    console.log("get");
    res.render('index', { title: 'Yankee' });
});

router.post('/login', function (req, res) {
    authenticate(req.query.username, md5(req.query.password), function (err, user) {
        if (user) {
            req.session.user = user;
            console.log(req.session.user)
            res.send(user)
        } else {
            req.session = null
            res.send('error')
        }
    });
});
module.exports = router;
