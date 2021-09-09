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
            length: 50,
            nullable: false
        },
        description: {
            type: "varchar",
            length: 250
        },
        producer: {
            type: "varchar",
            length: 30,
            nullable: false
        },
        price: {
            type: "float",
            nullable: false
        }
    }
});