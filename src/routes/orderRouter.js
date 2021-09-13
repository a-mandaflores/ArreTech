const auth = require('../jwtauth')

module.exports = function (router) {

    const order = require('../controllers/orderController');
  
    router.post('/order/:userId', auth, order.createOrder); //FINALIZAR COMPRAR Esta criando 1 order e adicionado os itens - OK
    router.put('/order/checkout', order.checkout)


}