var express = require('express');
var app = express();

/* GET users listing. */
app.get('/', function (req, res, next) {
    var logged = Boolean(req.session.nombre)
    res.render('personal', {
        title: 'Personal',
        name: req.session.nombre,
        logged: logged
    });
});

module.exports = app;