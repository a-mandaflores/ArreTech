const user = require('./user')
const store = require('./store')
const product = require('./product')

const ecommerce  = {
    paths:{
        "/user": user,
        "/store": store,
        "/product": product
    }
};

module.exports = ecommerce;

