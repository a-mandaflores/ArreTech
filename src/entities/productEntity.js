var EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
    name: "Product", //nome da entidade, e por default nome da tabela no bd
    tableName: "tb_products", //redefinindo o nome da tabela no bd
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        name: {
            type: "varchar",
            length: 15,
            require: true
        },
        description: {
            type: "varchar",
            length: 30
        },
        price: {
            type: "varchar",
            length: 30,
            require: true
        }

    }
});