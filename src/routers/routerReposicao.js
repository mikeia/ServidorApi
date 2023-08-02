const express = require('express');
const controllerReposicao = require('../controllers/ReposicaoController');

const routers = express.Router();

routers.get('/Reposicao/GetOne',controllerReposicao.GetOne);
routers.post('/Reposicao/Create',controllerReposicao.Create);

/*
routers.get('/Repo/List', controllerReposicao.List);
routers.post('/Repo/Update',controllerReposicao.Update);
routers.post('/Repo/Delete',controllerReposicao.Delete);
*/
module.exports = routers;