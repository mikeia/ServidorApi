const express = require('express');
const controllerTransEst = require('../controllers/TransEstController');

const routers = express.Router();

routers.post('/Transest/cd_empresa/cd_item',controllerTransEst.PostOne);


module.exports = routers;