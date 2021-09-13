
const auth = require('../jwtauth')

module.exports = function (router) {

    const user = require('../controllers/userController');
  
    router.post('/user', user.create);//Criar cliente Ok
    //router.get('/user', auth, user.list); //rota de teste -> vou apagar
    router.post('/user/login', user.login); //Logar cliente
    router.get('/user/orders/:userId', auth, user.listOrdersUser); //Listar pedidos de um cliente Ok --> usando Query Builder

}
