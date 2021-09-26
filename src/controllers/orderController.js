
const conn = require('../data/database')
const Order = require('../entities/orderEntity')
const Product = require('../entities/productEntity')
const User = require('../entities/userEntity')

var items = []
var orderId = 0

const createOrder = async (req, res) => {
    // #swagger.tags = ['Order']
    // #swagger.description = 'Endpoint - Novo pedido'

    /* #swagger.security = [{
       "apiKeyAuth": []
    }] */

    const { userId } = req.params;

    var user = userId

    var amount = 0

    for (var i = 0; i < items.length; i++) {
        amount += items[i].totalPrice;
    }

    var status = "em analise" //default, após checkout modificar para realizado

    //var dateFormat =  Date.now() //saída desejada date : 'dd/MM/yyyy HH:mm';

    var newOrder = { user, amount, status, items }

    await conn.getRepository(Order).save(newOrder);

    //status compra: realizada, retirada, negada, desistiu da compra ()

    res.status(201).json({ order: newOrder });
    
    items.length = 0; //limpa o array de items do pedido
}
const checkout = async (req, res) => {

    // #swagger.tags = ['Order']
    // #swagger.description = 'Endpoint - Novo pedido'

    /* #swagger.security = [{
       "apiKeyAuth": []
    }] */

    const order = await conn.getRepository(Order).findOne(orderId)

    order.status = 'Realizada'

    await conn.getRepository(Order).save(order);

    res.status(200).json(order)
}

const addItem = async (req, res) => {
    // #swagger.tags = ['Item']
    // #swagger.description = 'Endpoint - Adicionar item a lista de pedido.'

    /* #swagger.parameters['newItem'] = {
    in: 'body',
    description: 'Informações do item.',
    required: true,
    type: 'object',
    schema: { $ref: "#/definitions/AddItem" }

 } */
    var product = req.body.product

    var quantity = req.body.quantity

    var resultProduct = await conn.getRepository(Product).findOne(product);

    if (resultProduct === undefined) {
        // #swagger.responses[404] = { description: 'Produto não localizado' }
        res.status(404).json({ message: 'product not found' })

    } else {
        var price = resultProduct.price

        var totalPrice = quantity * resultProduct.price

        items.push({ product, quantity, price, totalPrice })

        // #swagger.responses[200] = { description: 'Itens adicionados à lista' }
        res.status(200).json({ items })
    }
}

const removeItem = async (req, res) => {
    // #swagger.tags = ['Item']
    // #swagger.description = 'Endpoint - Remover item da lista de pedido.'

    if (items.length === 0) {
        // #swagger.responses[400] = { description: 'Nenhum item na lista de pedido.' }
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
                // #swagger.responses[200] = { description: 'Item removido da lista de pedido.' }
                await res.status(200).json({ message: 'item successfully removed' });
            } catch (err) {
                console.log(err);
            }
        } else {
            // #swagger.responses[404] = { description: 'Produto não localizado na lista de pedido' }
            await res.status(404).json({ message: "product not found in items array" });
        }
    }
}

module.exports = { createOrder, checkout, addItem, removeItem };

