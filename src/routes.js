
const auth = require('./jwtauth')

module.exports = function (router) {

    const user = require('./controllers/userController');
    const store = require('./controllers/storeController')
    const product = require('./controllers/productController')
    const order = require('./controllers/orderController')

    //const express = require('express');

    //const routes = express();

    // routes.use(express.json());

    //Rotas do USER
    router.post('/user', user.create);//Criar cliente Ok
    //router.get('/user', auth, user.list); //rota de teste -> vou apagar
    router.post('/user/login', user.login); //Logar cliente
    router.get('/user/orders/:userId', auth, user.listOrdersUser); //Listar pedidos de um cliente Ok --> usando Query Builder

    //Rotas do PRODUCT
 //   router.post('/product', product.createProduct);//Criar produto ---> será apagada, usar migration
    router.get('/product', product.listProduct);//Listar produto Ok

    //Rotas do STORE
    router.get('/store', store.listStore); //Listar lojas Ok

    //Rotas do ORDER
    router.post('/order/:userId', auth, order.createOrder); //FINALIZAR COMPRAR Esta criando 1 order e adicionado os itens - OK
    router.put('/order/checkout', order.checkout)

    router.post('/item', order.addItem);//Adicionar produtos na lista de pedido de um cliente
    router.delete('/item/:productId', order.removeItem);//Remover produto da lista de pedido de um cliente

    /*
    routes.post('/checkout/:orderId')//Finalizar compra - talvez criar tabela payment com relação 1 para 1 com 
    tabela order e setar status, amount, id_endereço de entregaUser, id_endereço de entrega Loja
    
    */
}
