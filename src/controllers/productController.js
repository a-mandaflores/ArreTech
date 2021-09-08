const conn = require('../data/databaseIndex')
const Product = require('../entities/productEntity')

const createProduct = async (req, res) => {

    const { name, description } = req.body;

    var newProduct = await conn.getRepository(Product).save(req.body);

    return res.status(201).json({data: newProduct});
}

module.exports = createProduct;