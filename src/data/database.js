//conectar o banco de dados 
async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const mysql = require("mysql2/promise");
    //createConnection("mysql://usuario:senha@servidor:porta/banco")
    const connection = await mysql.createConnection("mysql://root:root@localhost:3306/db_arretech");
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}

//esse método permiti a conexão com o mysql
connect();
//const conexao = connect()