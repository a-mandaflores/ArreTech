var EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
    name: "Product", //nome da entidade, e por default nome da tabela no bd
    tableName: "tb_product", //redefinindo o nome da tabela no bd
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
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
    },
    relations: {
        orderItem: {
            target: "OrderItem", // OrderEntity
            type: "one-to-many",
            inverseSide: "product"
            //cascade: true,
            //eager:true
        }
    }
});