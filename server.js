
// importa express
const express = require('express') 
//cria a instancia do express
const app = express() 
//definindo porta do servidor
const PORT = 9090

//conectar o banco de dados com o mongoose
//const db = require('./src/data/database')
//db.connect()

//Possibilitando trabalhar com JSON
app.use(express.json())

//usar as rotas

//subindo o servidor
app.listen(PORT, ()=> console.log(`Servidor em pleno funcionamento na porta ${PORT}`))

module.exports = app