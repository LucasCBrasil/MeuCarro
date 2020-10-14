var carros = require('../db.json');

exports.getCarros = function(req,res,next) {
    res.json(carros);
}