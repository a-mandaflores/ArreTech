const user = require('../controllers/userController');
const store = require('../controllers/storeController')
const product = require('../controllers/productController')
const order = require('../controllers/orderController')
const orderItem = require('../controllers/orderItemController')

const express = require('express');

const routes = express();

routes.use(express.json());

routes.post('/user', user.create);//Criar cliente Ok
routes.get('/user', user.list); //rota de teste -> vou apagar

routes.post('/product', product.createProduct);//Criar produto ---> será apagada, usar migration
routes.get('/product', product.listProduct);//Listar produto Ok

routes.get('/store', store.listStore); //Listar lojas Ok

routes.post('/order', order.createOrder); //Esta criando 1 order e adicionado os itens - OK
routes.get('/order/:userId', user.listOrdersUser); //Listar pedidos de um cliente Ok --> usando Query Builder

routes.post('/item', orderItem.addItem);
routes.delete('/item/:itemId', orderItem.deleteItem);
/*
routes.post('/addProduct/:user_id')//Adicionar produtos na lista de pedido de um cliente
routes.delete('/removeProduct/:user_id')//Remover produto da lista de pedido de um cliente

routes.post('/checkout/:user_id')//Finalizar compras

*/

module.exports = routes;