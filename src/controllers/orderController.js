const conn = require('../data/databaseIndex')
const Order = require('../entities/orderEntity')

const createOrder = async (req, res) => {

    const { price, user, items } = req.body;

    var data = { price, user, items };

     await conn.getRepository(Order).save(data);

    res.status(201).json({data: data});
}


module.exports = { createOrder }  

