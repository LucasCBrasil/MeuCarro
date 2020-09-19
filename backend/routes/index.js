const { promisify } = require('util');
const path = require('path');
const fs = require('fs-extra');

var express = require('express');
var router = express.Router();
var carros = require('../db.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json(carros.carros);
});

router.post('/carro', function(req, res) {
  _saveNovoCarro(null, req.body, res);
  res.json(carros.carros);
})

module.exports = router;

function _saveNovoCarro(id = null, reqBody, res) {
  const readFileAsync = promisify(fs.readFile);
  const writeFileAsync = promisify(fs.writeFile);

  //recupera dado atual
  readFileAsync('./db.json', 'utf8')
  .then(allData => {
    let generalData = JSON.parse(allData);

    const novoCarro = {
      id: reqBody.id,
      imagem: reqBody.imagem,
      cor: reqBody.cor,
      marca: reqBody.marca,
      modelo: reqBody.modelo,
      ano: reqBody.ano,
      km: reqBody.km,
      preco: reqBody.preco
    };
    console.log(novoCarro);
    if (id == null) {
      generalData['carros'].push(novoCarro);
    } else {
      const idx = generalData['carros'].findIndex(r => r.id == id);
      generalData['carros'][idx] = novoCarro;
    }

    //escreve no arquivo o novo dado inserido
    writeFileAsync(path.join('./', 'db.json'), JSON.stringify(generalData, null, 2))
      .then(() => {
        res.sendStatus(200);
      })
      .catch(err => {
        console.error(err);
      });
  })
  .catch(err => {
    console.error(err);
  });
}
