const express = require('express');

const routes = require('./src/routes/indexRoute');

const swaggerUI = require('swagger-ui-express')
const swagger = require('./swagger')

const PORT = 3000;

//const db = require("./src/data"); //outra forma de escrever a linha 11

require('./src/data/databaseIndex');

const app = express();

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swagger))

require('./endpoints')(app)

app.use(express.json()); //informa para usar requisições e responses em formato Json


app.use(routes);


app.listen(PORT, () => console.log(`Servidor em pleno funcionamento na porta ${PORT}`));
