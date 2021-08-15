var express = require('express');
var router = express();
var usuariosmodel = require('./../../models/usuariosModels');


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('admin/login', {
        layout: 'admin/layout'
    });
});
router.get('/logout', function (req, res, next) {
    req.session.destroy();
    res.render('admin/login', {
        layout: 'admin/layout'
    });
})
router.post('/', async (req, res, next) => {

    try {
        var dni = req.body.dni;
        var password = req.body.password;
        var data = await usuariosmodel.getDniAndPass(dni, password);
        if (data != undefined) {
            req.session.nombre = data.nombre;
            req.session.apellido = data.apellido;

            res.redirect('admin/builder');
        } else {
            res.render('admin/login', {
                layout: 'admin/layout',
                error: true
            })
        }
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;