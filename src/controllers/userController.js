const conn = require('../data/databaseIndex');
const tbUser = require('../entities/userEntity');


const create = async (req, res) => {

    try {
        const { name, email } = req.body;

        var newUser = { name, email }; //criou um objeto data, com base na desestruturação da requisição do body

        var newUser = await conn.getRepository(tbUser).save(newUser); 

        res.status(201).json({ data: newUser});


    } catch (err) {

        console.log(err);
    }
};
//rota de teste, será apagada
const list = async (req, res) => {
    
    const allUsers = await conn.getRepository(tbUser).find();

    res.status(200).json({ data: allUsers }); 

}

module.exports = { create, list };
