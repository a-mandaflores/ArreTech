const conn = require('../data/databaseIndex');
const tbStore = require('../entities/storeEntity');
const { all } = require('../routes/indexRoute');


//listar lojas
const listStore = async (req, res) => {
    try {
        
        const allStore = await conn.getRepository(tbStore).find(all);
        return res.status(200).json({ data: allStore });   
        
    } catch (error) {
        return res.status(400).send(error);        
    } 
}

module.exports = {listStore}