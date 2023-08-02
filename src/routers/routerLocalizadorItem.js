const express = require('express');
const controllerLocalizadorItem = require('../controllers/LocalizadorItemController');

const routers = express.Router();

routers.post('/LocalizadorItem/cd_empresa/cd_item',controllerLocalizadorItem.PostOne);


module.exports = routers;