const express = require('express');
const usersReposicao = require('../controllers/UsuarioController');

const routers = express.Router();

routers.post('/Users/userLogin',usersReposicao.PostOne);


module.exports = routers;