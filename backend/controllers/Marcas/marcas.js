var marcas = require('../marcas.json');

exports.get_marcas = function(req,res,next) {
    res.json(marcas);
}