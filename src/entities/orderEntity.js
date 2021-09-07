var EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
    name: "Cart", //nome da entidade, e por default nome da tabela no bd
    tableName: "tb_carts", //redefinindo o nome da tabela no bd
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        price: {
        type: "double"
        }
    }
});