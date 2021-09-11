const basicinfo = require('./basicinfo')
const server = require('./servers')
const components = require('./components')
const tags = require('./tags')

const user = require('./user')


const docs = {
    ...basicinfo,
    ...server,
    ...components,
    ...tags,
    ...user,
    

}

module.exports = docs