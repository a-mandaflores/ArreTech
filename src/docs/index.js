const basicinfo = require('./basicinfo')
const server = require('./servers')
const components = require('./components')
const tags = require('./tags')

const ecommerce = require('./ecommerce')


const docs = {
    ...basicinfo,
    ...server,
    ...components,
    ...tags,
    ...ecommerce,
    

}

module.exports = docs