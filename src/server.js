const express = require('express');

const api = express();

const routersReposicao = require('./routers/routerReposicao');
const routersUsersReposicao = require('./routers/routerUsuario');
const routersLocalizadorItem = require('./routers/routerLocalizadorItem');
const routersTransEst = require('./routers/routerTransEst');
const routersNotaEntrada = require('./routers/routerNotaEntrada');
const routerFunction = require('./routers/routerFunction')
const routersManLocalizador = require('./routers/routerManLocalizador');

api.use(express.json());
api.use(routersReposicao);
api.use(routersUsersReposicao);
api.use(routersLocalizadorItem);
api.use(routersTransEst);
api.use(routersNotaEntrada);
api.use(routerFunction);
api.use(routersManLocalizador)

api.listen(3000);