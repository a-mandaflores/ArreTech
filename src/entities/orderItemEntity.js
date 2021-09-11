var EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
    name: "OrderItem", //nome da entidade, e por default nome da tabela no bd
    tableName: "tb_order_items", //redefinindo o nome da tabela no bd
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        price: {
            type: "double"
        },
        quantity: {
            type: "int"
        },
        totalPrice: {
            type: "double"
        }
    },
    relations: {
        order: {
            target: "Order", // OrderEntity
            type: "many-to-one",
            joinColumn: true,
            //cascade: true,
            //eager:true
        },
        product: {
            target: "Product",
            type: "many-to-one",
            joinColumn: true
            //cascade: true
        }
    }
});