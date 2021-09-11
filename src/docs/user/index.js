const userList = require('./userList')
const userCreate = require('./userCreate')
const store = require('./storeList')

const user  = {
    paths:{
        "/user": userCreate,
        "/userlist": userList,
        "/store": store,
    }

};

module.exports = user;

