// importa express
const express = require('express') 

//para buscar a conexão com o mysql (arquivo database.js)
const db = require('./src/data/database')
//cria a instancia do express
const app = express() 
//definindo porta do servidor
const PORT = 9090

//Possibilitando trabalhar com JSON
app.use(express.json())

//usar as rotas

//subindo o servidor
app.listen(PORT, ()=> console.log(`Servidor em pleno funcionamento na porta ${PORT}`))

module.exports = app