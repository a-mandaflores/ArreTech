require('dotenv').config()
const createConnection = require('typeorm');
const optionEnv = process.env.DATABASE_URL

//conectar o banco de dados 
async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("process.env.DATABASE_URL");
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}

//const conexao = connect()

/*
try{
    createConnection.createConnection();
    //return conn;
    console.log("Me conectei ao MYSQL!!")
} catch (err){
    console.log("Erro:", err);
}

module.exports = createConnection;

/*
const conn = require('typeorm');

conn.createConnection();
console.log("Me conectei ao MYSQL!!")

module.exports = conn;*/