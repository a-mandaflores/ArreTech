const user = require('../controllers/userController');
const store = require('../controllers/storeController')
const product = require('../controllers/productController')
const order = require('../controllers/orderController')

const express = require('express');

const routes = express();

// routes.use(express.json());

//Rotas do USER
routes.post('/user', user.create);//Criar cliente Ok
routes.get('/user', user.list); //rota de teste -> vou apagar

//Rotas do PRODUCT
routes.post('/product', product.createProduct);//Criar produto ---> será apagada, usar migration
routes.get('/product', product.listProduct);//Listar produto Ok

//Rotas do STORE
routes.get('/store', store.listStore); //Listar lojas Ok

//Rotas do ORDER
routes.post('/order/:userId', order.createOrder); //FINALIZAR COMPRAR Esta criando 1 order e adicionado os itens - OK
routes.get('/order/user/:userId', user.listOrdersUser); //Listar pedidos de um cliente Ok --> usando Query Builder
routes.post('/item', order.addItem);//Adicionar produtos na lista de pedido de um cliente
routes.delete('/item/:productId', order.removeItem);//Remover produto da lista de pedido de um cliente

/*
routes.post('/checkout/:orderId')//Finalizar compra - talvez criar tabela payment com relação 1 para 1 com 
tabela order e setar status, amount, id_endereço de entregaUser, id_endereço de entrega Loja

*/

module.exports = routes;