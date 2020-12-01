var express = require('express');
var router = express.Router();

const favoritosController = require('../../controllers/Favoritos/favoritos');

router.get('/favoritos', favoritosController.get_favoritos);

module.exports = router;