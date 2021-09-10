const conn = require('../data/databaseIndex')
const Item = require('../entities/orderItemEntity')

const addItem = async (req, res) => {

    const { price, order } = req.body;

    var data = { price, order };

    //const order = await userRepository.find({ relations: ["photos"] }

     await conn.getRepository(Item).save(data);

    res.status(201).json({data: data});
}

const deleteItem = async (req, res) => {

    const { itemId }  = req.params;

    await conn.getRepository(Item).delete({ id: itemId })

    res.status(200).json({message: "Item removido"})
}

module.exports = { addItem, deleteItem }