const express = require('express');

const routes = require('./src/routes/indexRoute');

const swagger = require('swagger-ui-express')
const docs = require('./src/docs')

const PORT = 9090;

//const db = require("./src/data"); //outra forma de escrever a linha 11

require('./src/data/databaseIndex');

const app = express();

app.use('/docs', swagger.serve, swagger.setup(docs))

app.use(routes);

app.use(express.json()); //informa para usar requisições e responses em formato Json

app.listen(PORT, () => console.log(`Servidor em pleno funcionamento na porta ${PORT}`));
