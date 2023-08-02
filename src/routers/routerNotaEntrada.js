const express = require('express');
const controllerNotaEntrada = require('../controllers/NotaEntradaController');

const routers = express.Router();

routers.post('/NotaEntrada/cd_empresa/cd_item', controllerNotaEntrada.PostOne);

module.exports = routers;