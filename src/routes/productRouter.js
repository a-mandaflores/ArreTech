
module.exports = function (router) {

    const product = require('../controllers/productController');
  
    router.get('/product', product.listProduct);//Listar produto Ok

}