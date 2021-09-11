
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
        amount: {
            type: "double"
        }
    },
    relations: {
        user: {
            target: "User", // CategoryEntity
            type: "many-to-one",
            joinColumn: true,
            //cascade: true
            //eager: true não esta funcionando o uso 
        },
        items: {
            target: "OrderItem",
            type: "one-to-many",
            inverseSide: "order", //inverSide especifica um alias que é associado a coluna orderId da tb_order_items
            cascade: true //cascade deve estar do lado One, para que ao salvar uma nova ordem salve automaticamente os items
            //eager: true   
        }
    }
});
