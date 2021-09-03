
// importa express
const express = require('express') 
//cria a instancia do express
const app = express() 

//conectar o banco de dados com o mongoose
//const db = require('./src/data/database')
//db.connect()

//Possibilitando trabalhar com JSON
app.use(express.json())

//usar as rotas

//subindo o servidor
app.listen(9090, ()=> console.log('Servidor em pleno funcionamento'))    