const conn = require('../data/databaseIndex');
const Product = require('../entities/productEntity');


const createProduct = async (req, res) => {

    const newProduct = await conn.getRepository(Product).save(req.body);
    return res.status(201).json({data: newProduct});

}

const listProduct = async (req, res) => {
    try {        
        const allProducts = await conn.getRepository(Product).find()
        return res.status(200).json({data: allProducts});   
        
    } catch (error) {
        return res.status(400).send(error);        
    } 
}
    

module.exports = {createProduct, listProduct};