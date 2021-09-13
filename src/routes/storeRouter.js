module.exports = function (router) {

    const store = require('../controllers/storeController');
  
    router.get('/store', store.listStore); //Listar lojas Ok

}