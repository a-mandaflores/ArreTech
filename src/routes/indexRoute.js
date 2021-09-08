const {create, list} = require('../controllers/userController');
const  createProduct  = require('../controllers/productController');

const Router = require('express')

const routes = Router()

routes.post('/createUser')//Criar cliente


routes.post('/addProduct/:user_id')//Adicionar produtos na lista de clientes
routes.delete('/removeProduct/:user_id')//Remover produto da lista de clientes
routes.get('/listProduct')//Consultar todos os produtos disponiveis

routes.post('/checkout/:user_id')//Finalizar compras
routes.get('/userHistory/:user_id')//Consultar a lista de compras do cliente

routes.get('/listShop')//Listar lojas

module.exports = routes;