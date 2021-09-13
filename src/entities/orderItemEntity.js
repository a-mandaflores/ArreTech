var EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
    name: "OrderItem", //nome da entidade, e por default nome da tabela no bd
    tableName: "tb_order_item", //redefinindo o nome da tabela no bd
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        price: {
            type: "float"
        },
        quantity: {
            type: "int",
            require: true
        },
        totalPrice: {
            type: "float"
        }
    },
    relations: {
        order: {
            target: "Order", // OrderEntity
            type: "many-to-one",
            joinColumn: true,
            eager: true
        },
        product: {
            target: "Product",
            type: "many-to-one",
            joinColumn: true
        }
    }
});