require("dotenv").config();
const jwt = require('jsonwebtoken');
const conn = require('../data/database');
const User = require('../entities/userEntity');

const create = async (req, res) => {

    // #swagger.tags = ['User']
    // #swagger.description = 'Endpoint - cadastrar um novo usuário'


    /* #swagger.parameters['newUser'] = {
       in: 'body',
       description: 'Informações do usuário.',
       required: true,
       type: 'object',
       schema: { $ref: "#/definitions/AddUser" }

    } */

    try {
        const { name, email, password } = req.body;


        var newUser = { name, email, password }; //criou um objeto data, com base na desestruturação da requisição do body

        var newUser = await conn.getRepository(User).save(newUser);
        // #swagger.responses[201] = { description: 'Usuário cadastrado com sucesso' }
        // #swagger.responses[201] = { description: 'Usuário cadastrado com sucesso' }
        res.status(201).json(newUser);


    } catch (err) {
        // #swagger.responses[500] = { description: 'Erro de servidor' }
        res.status(500).json(err);
    }
};

/* ROTA LISTAR TODOS OS USUÁRIOS - TESTE
const list = async (req, res) => {
    // #swagger.tags = ['User']
    // #swagger.description = 'Endpoint - listar todos os usuários'

    /* #swagger.security = [{
           "apiKeyAuth": []
    }] 

    try {
        const allUsers = await conn.getRepository(User).find();


        res.status(200).json({ data: allUsers });

    } catch (err) {
        console.log(err);
    }

} */

const listOrdersUser = async (req, res) => {

    // #swagger.tags = ['User']
    // #swagger.description = 'Endpoint - listar todos os pedidos do usuário'

    /* #swagger.security = [{
        "apiKeyAuth": []
    }] */

    const { userId } = req.params;

    //---- FUNCIONANDO APRESENTA OS DADOS DO USUÁRIO EM CIMA ---------------
  /*  const userOrders = await conn.getRepository(User)
        .createQueryBuilder('user')
        .leftJoinAndSelect('user.orders', 'order')
        .where('user.id = :userId', { userId: userId })
        .getOne();

    const orders = await conn.getRepository(Order)
        .createQueryBuilder("order")
        .leftJoinAndSelect("order.items", "item")
        .where('order.userId = :id', { id: userId })
        .getMany(); */

    const userR = conn.getRepository(User);
    const user = await userR.findOne(userId, { relations: ["orders"] });

    //res.status(200).json([user, { orders: orders }])
    res.status(200).json([user])
}

const login = async (req, res) => {

    // #swagger.tags = ['User']
    // #swagger.description = 'Endpoint - logar usuário'

    /* #swagger.parameters['userLogin'] = {
   in: 'body',
   description: 'Dados de login de um usuário.',
   required: true,
   type: 'object',
   schema: { $ref: "#/definitions/UserLogin" }

} */
    const { email, password } = req.body

    const user = await conn.getRepository(User).findOne({ where: { email: email } });;

    if (user != undefined) {
        if (user.password == password) {
            //const id = user.id
            const token = jwt.sign({ id: user.id, email: user.email }, process.env.SECRET, {
                expiresIn: 300 // expires in 5min
            });
            res.json({ auth: true, token: token });
        } else {
            res.status(400).send('usuário e senha não correspondem')
        }
    } else {
        res.status(400).send('email não localizado')
    }

}
module.exports = { create, listOrdersUser, login };
