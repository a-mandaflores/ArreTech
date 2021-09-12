
const createConnection = require('typeorm');
try{
    createConnection.createConnection();
    //return conn;
    console.log("Me conectei ao MYSQL!!")
} catch (err){
    console.log("Erro:", err);
}

module.exports = createConnection;
