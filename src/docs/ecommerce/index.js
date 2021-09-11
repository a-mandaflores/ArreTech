const user = require('./user')
const store = require('./storeList')

const ecommerce  = {
    paths:{
        "/user": user,
        "/store": store,
    }
};

module.exports = ecommerce;

