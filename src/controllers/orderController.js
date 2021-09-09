const conn = require('../data/databaseIndex')
//const Order = require('../entities/orderEntity')
//const Order = require('../entities/orderItemEntity')


const createProduct = async (req, res) => {

    const { name, description } = req.body;

    var newProduct = await conn.getRepository(Product).save(req.body);

    return res.status(201).json({data: newProduct});
}

module.exports = createProduct;