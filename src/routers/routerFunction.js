const express = require('express');
const controllerFunction = require('../controllers/uFunctionController');

const routers = express.Router();

routers.post('/FunctionExec/cdusuario/cdempresa/descpesquisa/descwhereEx',controllerFunction.Post);


module.exports = routers;