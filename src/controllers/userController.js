const conn = require('../data/databaseIndex');
const User = require('../entities/userEntity');
const Order = require('../entities/orderEntity')


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

    const  userId = req.params;

/* funcionando 
    const orders = await conn.getRepository(Order)
        .createQueryBuilder("order")
        .where("order.user = :userId", {userId: userId})
        .getMany();
*/
    const userOrders = await conn.getRepository(User)
    .createQueryBuilder('user')
    .leftJoinAndSelect('user.orders', 'order')
    .where('user.id = :userId', {userId: userId })
    .getOne();

    res.status(200).json({ data: userOrders })
}

module.exports = { create, list, listOrdersUser };
