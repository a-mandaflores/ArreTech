var EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
    name: "User", //nome da entidade, e por default nome da tabela no bd
    tableName: "tb_user", //redefinindo o nome da tabela no bd
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        name: {
            type: "varchar",
            length: 30,
            nullable: false
        },
        email: {
            type: "varchar",
            length: 30,
            nullable: false
        },
        password: {
            type: "varchar",
            length: 15,
            nullable: false
        }
    },
    relations: {
        orders: {
            target: "Order", // OrderEntity
            type: "one-to-many",
            inverseSide: "user" //*muito importante! traz consistencia na relação (é um alias q referencia a userId em order)
            //eager: true
        }
    }
});