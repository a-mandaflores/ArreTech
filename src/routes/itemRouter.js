module.exports = function (router) {

    const order = require('../controllers/orderController');
  
    router.post('/item', order.addItem);//Adicionar produtos na lista de pedido de um cliente
    router.delete('/item/:productId', order.removeItem);//Remover produto da lista de pedido de um cliente

}