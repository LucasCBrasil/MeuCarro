var favoritos = require('../../favoritos.json');

exports.get_favoritos = function(req,res,next) {
    res.json(favoritos);
}