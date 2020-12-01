var carros = require('../../db.json');
var marcas = require('../../marcas.json');

exports.get_carros = function(req,res,next) {
    res.json(carros);
}

exports.get_marcas = function(req,res,next) {
    res.json(marcas);
}

exports.get_carro = function (req, res) {
    let id = req.params.id;
    carForId={}
    carros.forEach(carro => {
      if(carro.id==id){
        carForId=carro;
      }
    });
    res.json(carForId);
}

exports.get_form = function(req, res) {
  res.json();
}