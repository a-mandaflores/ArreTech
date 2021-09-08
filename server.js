
const express = require('express');

const routes = require('../ArreTech/src/routes/indexRoute');

const db = require("./src/data");

require('./database');

const app = express();


//app.use(routes);

app.use(express.json()); //informa para usar requisições e responses em formato Json

routes(app); //para acessar as rotas http

app.listen(9090, () => console.log(`Servidor em pleno funcionamento na porta ${PORT}`));