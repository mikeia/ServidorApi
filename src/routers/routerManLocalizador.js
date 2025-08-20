const express = require('express');
const router = express.Router();
const ManutLocalizadorController = require('../controllers/uFunctionManutLocalizadorController'); 

router.post('/FunctionExecManut', ManutLocalizadorController.Create);

module.exports = router;
