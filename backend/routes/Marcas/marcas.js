var express = require('express');
var router = express.Router();

const marcasController = require('../../controllers/Marcas/marcas');

router.get('/marcas', marcasController.get_marcas);

module.exports = router;