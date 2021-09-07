const conn = require('../database/index');
const User = require('../entities/User');


//const {req, res} = require('express');

const create = async (req, res) => {

    try {
        const { name, email } = req.body;

        var newUser = { name, email }; //criou um objeto data, com base na desestruturação da requisição do body

        //console.log(req.body);
        //console.log("error email:", data.email);

        var newUser = await conn.getRepository(User).save(newUser);

        res.status(201).json({ data: newUser});

        return 7;

    } catch (err) {

        console.log(err);
    }

    /* Dessa forma funciona
    const name = "teste"
    const email = "teste@email.com"

    var data = { name, email }; //criou um objeto data, com base na desestruturação da requisição do body

    var data = await conn.getRepository(user).save(data); //salvando no banco de dados o objeto data

    //return res.status(200).json({ data:"rota cadastrar" });

    return res.status(201).json({ data: data });*/
};
const list = async (req, res) => {

    const allUsers = await conn.getRepository(User).find();

    return res.status(200).json({ data: allUsers }); //retornando todos os usuários
}

module.exports = { create, list };
