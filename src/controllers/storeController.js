const conn = require('../data/database');
const tbStore = require('../entities/storeEntity');

//listar lojas
const listStore = async (req, res) => {
    // #swagger.tags = ['Store']
    // #swagger.description = 'Endpoint - listar todas lojas físicas do OmniChannel.'
    try {
        
        const allStore = await conn.getRepository(tbStore).find();
        // #swagger.responses[200] = { description: 'Lista de lojas' }
        return res.status(200).json({ store: allStore });   
        
    } catch (error) {
        // #swagger.response[500] = { description: 'Erro de servidor' }
        return res.status(500).send(error);        
    } 
}

module.exports = {listStore}