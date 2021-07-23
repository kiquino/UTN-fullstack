var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  var nombre = req.session.nombre;
  var logged = Boolean(req.session.nombre);
  res.render('index', {
    title: 'Express',
    name: nombre,
    logged: logged
  });
});

module.exports = router;