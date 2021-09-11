const conn = require('../data/databaseIndex')
const Order = require('../entities/orderEntity')
const Product = require('../entities/productEntity')

var items = []
var count = 0;

const createOrder = async (req, res) => {

    const { user, amount } = req.body

    var newOrder = { user, amount, items }

    await conn.getRepository(Order).save(newOrder);

    //status compra: realizada, retirada, negada, desistiu da compra ()

    res.status(201).json({ data: newOrder });

    items.length = 0; //limpa o array de items do pedido

}

const addItem = async (req, res) => {

    var product = req.body.product

    var quantity = req.body.quantity

    var resultProduct = await conn.getRepository(Product).findOne(product);

    if(resultProduct === undefined){
        res.status(400).json({message: 'product not found'})
    } else {
        var price = resultProduct.price

        var totalPrice = quantity*resultProduct.price
    
        items.push({product, quantity, price, totalPrice})
    
        res.status(200).json({ items })
    }
}

const removeItem = async (req, res) => {

    if (items.length === 0) {
        await res.status(400).json({ message: "items array is empty" });

    } else {
        const { productId } = req.params; //tem q colocar entre parenteses para receber o dado

        var e = -1;
        var item;

        for (i = 0; i < items.length; i++) {
            if (items[i].product == productId) {
                e = 0
                item = items.indexOf(items[i]);
                break;

            }
        }

        if (e == 0) {
            try {
                items.splice(item, 1);
                await res.status(200).json({ data: items });
            } catch (err) {
                console.log(err);
            }
        } else {
            await res.status(400).json({ message: "product not found in items array" });
        }
    }
}

module.exports = { createOrder, addItem, removeItem };

