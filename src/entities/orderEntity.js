
var EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
    name: "Order", //nome da entidade, e por default nome da tabela no bd
    tableName: "tb_orders", //redefinindo o nome da tabela no bd
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        price: {
        type: "double"
        }
    },
    relations: {
        user: {
            target: "User", // CategoryEntity
            type: "many-to-one",
            joinTable: true,
            cascade: true
        }
    }
});
