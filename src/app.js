const express = require('express');
const http = require('http')

//const routes = require('./src/routes/indexRoute');

const swaggerUI = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')

//const db = require("./src/data"); //outra forma de escrever a linha 11

require('./data/database');

const app = express();

const PORT = 3000; //obrigatório essa porta porque o arquivo swagger-output.json foi gerado com essa porta

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerFile))

app.use(express.json()); //informa para usar requisições e responses em formato Json

require('./routes')(app)

try {
    http.createServer(app).listen(PORT)
    console.log(`Servidor em pleno funcionamento na porta ${PORT}`)
}catch(err){
    console.log(err)
}

//app.use(routes);


//app.listen(PORT, () => console.log(`Servidor em pleno funcionamento na porta ${PORT}`));
