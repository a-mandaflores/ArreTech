const user = require('../controllers/userController');

const Store = require('../controllers/storeController')
const Product = require('../controllers/productController')

const express = require('express');

const routes = express();

routes.use(express.json());

routes.post('/user', user.create);//Criar cliente
routes.get('/user', user.list); //rota de teste -> vou apagar

routes.post('/product', Product.createProduct);//Crear produto ---> será apagada, usar migration
routes.get('/product', Product.listProduct);//Listar produto

routes.get('/store', Store.listStore);



/*
routes.post('/addProduct/:user_id')//Adicionar produtos na lista de clientes
routes.delete('/removeProduct/:user_id')//Remover produto da lista de clientes
routes.get('/listProduct')//Consultar todos os produtos disponiveis

routes.post('/checkout/:user_id')//Finalizar compras
routes.get('/userHistory/:user_id')//Consultar a lista de compras do cliente

routes.get('/listShop')//Listar lojas
*/

module.exports = routes;