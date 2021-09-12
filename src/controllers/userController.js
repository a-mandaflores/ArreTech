const conn = require('../data/database');
const User = require('../entities/userEntity');
const Order = require('../entities/orderEntity')
const Item = require('../entities/orderItemEntity')


const create = async (req, res) => {

    // #swagger.tags = ['User']
    // #swagger.description = 'Endpoint - cadastrar um novo usuário.'

    /* #swagger.parameters['newUser'] = {
       in: 'body',
       description: 'Informações do usuário.',
       required: true,
       type: 'object',
       schema: { $ref: "#/definitions/AddUser" }
    } */

    try {
        const { name, email } = req.body;


        var newUser = { name, email }; //criou um objeto data, com base na desestruturação da requisição do body

        var newUser = await conn.getRepository(User).save(newUser);
// #swagger.responses[201] = { description: 'Usuário cadastrado com sucesso' }
        // #swagger.responses[201] = { description: 'Usuário cadastrado com sucesso' }
        res.status(201).json(newUser);


    } catch (err) {
        // #swagger.responses[500] = { description: 'Erro de servidor' }
        res.status(500).json(err);
    }
};


const list = async (req, res) => {
    // #swagger.tags = ['User']
    // #swagger.description = 'Endpoint - listar todos os usuários.'

    try {
        const allUsers = await conn.getRepository(User).find();


        res.status(200).json({ data: allUsers });

    } catch (err) {
        console.log(err);
    }

}

const listOrdersUser = async (req, res) => {

    const { userId } = req.params;

    //---- FUNCIONANDO APRESENTA OS DADOS DO USUÁRIO EM CIMA ---------------
    const userOrders = await conn.getRepository(User)
        .createQueryBuilder('user')
        .leftJoinAndSelect('user.orders', 'order')
        .where('user.id = :userId', { userId: userId })
        .getOne();

    const orders = await conn.getRepository(Order)
        .createQueryBuilder("order")
        .leftJoinAndSelect("order.items", "item")
        .where('order.userId = :id', { id: userId })
        .getMany();

    const userR = conn.getRepository(User);
    const user = await userR.findOne(userId, { relations: ["orders"] });

    res.status(200).json([user, { orders: orders }])
}

module.exports = { create, list, listOrdersUser };
