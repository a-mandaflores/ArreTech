// importa express
const express = require('express') 
//cria a instancia do express
const app = express() 
//definindo porta do servidor
const PORT = 9090

//conectar o banco de dados 
async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root:luiztools@localhost:3306/crud");
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}

//Possibilitando trabalhar com JSON
app.use(express.json())

//usar as rotas

//subindo o servidor
app.listen(PORT, ()=> console.log(`Servidor em pleno funcionamento na porta ${PORT}`))

module.exports = app