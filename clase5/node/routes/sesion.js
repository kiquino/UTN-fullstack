var express = require('express');
var app = express();

app.get('/', function (req, res, next) {
    var logged = Boolean(req.session.nombre);

    res.render('sesion', {
        title: 'Inicio de Sesion',
        name: req.session.nombre,
        logged: logged
    });
});
module.exports = app;