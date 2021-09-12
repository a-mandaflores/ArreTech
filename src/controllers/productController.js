const conn = require('../data/database');
const Product = require('../entities/productEntity');


const createProduct = async (req, res) => {

    const newProduct = await conn.getRepository(Product).save(req.body);
    return res.status(201).json({ data: newProduct });

}

const listProduct = async (req, res) => {
    // #swagger.tags = ['Product']
    // #swagger.description = 'Endpoint - listar todos os produtos do OmniChannel.'

    try {
        const allProducts = await conn.getRepository(Product).find()
        // #swagger.responses[200] = { description: 'Lista de produtos' }
        return res.status(200).json( {products: allProducts} );

    } catch (error) {
        // #swagger.responses[500] = { description: 'Erro de servidor' }
        return res.status(500).send(error);
    }
}


module.exports = { createProduct, listProduct };