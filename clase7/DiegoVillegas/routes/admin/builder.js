var express = require('express');
var app = express();

/* GET users listing. */
app.get('/', function (req, res, next) {
    var logged = Boolean(req.session.nombre);
    res.render('admin/builder', {
        layout: 'admin/layout',
        title: 'builder',
        nombre: req.session.nombre,
        apellido: req.session.apellido,
        logged: logged
    });
});

module.exports = app;