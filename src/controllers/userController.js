const conn = require('../data/databaseIndex');
const User = require('../entities/userEntity');
const Order = require('../entities/orderEntity')
const Item = require('../entities/orderItemEntity')


const create = async (req, res) => {

    try {
        const { name, email } = req.body;
        

        var newUser = { name, email }; //criou um objeto data, com base na desestruturação da requisição do body
        
        var newUser = await conn.getRepository(User).save(newUser);
        
        res.status(201).json({ data: newUser });
        console.log('Creando usuário')
        


    } catch (err) {

        console.log(err);
    }
};
//rota de teste, será apagada
const list = async (req, res) => {
    try {
        const allUsers = await conn.getRepository(User).find();
        res.status(200).json({ data: allUsers });
        console.log('Listando usuário')

    } catch (err) {
        console.log(err);
    }

}

const listOrdersUser = async (req, res) => {

    const { userId }= req.params;

    //---- FUNCIONANDO APRESENTA OS DADOS DO USUÁRIO EM CIMA ---------------
    const userOrders = await conn.getRepository(User)
        .createQueryBuilder('user')
        .leftJoinAndSelect('user.orders', 'order')
        .where('user.id = :userId', { userId: userId })
        .getOne();
    
    /* Funciona, mas nao é o que eu quero/preciso -- seleciona por id da ordem os itens
    const orderItems = await conn.getRepository(Order)
        .createQueryBuilder('order')
        .leftJoinAndSelect('order.items', 'item')
        .where('order.id = :orderId', { orderId: 1}) 
        .getMany();

    res.status(200).json({ data: orderItems }) */

    const orders = await conn.getRepository(Order)
    .createQueryBuilder("order")
    .leftJoinAndSelect("order.items", "item")
    .where('order.userId = :id', {id: userId})
    .getMany();

    const userR = conn.getRepository(User);
    const users = await userR.findOne(userId, { relations: ["orders"] });

    res.status(200).json([users, {orders: orders}])
}

module.exports = { create, list, listOrdersUser };
