var EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
    name: "User", //nome da entidade, e por default nome da tabela no bd
    tableName: "tb_users", //redefinindo o nome da tabela no bd
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        name: {
            type: "varchar",
            length: 30
        },
        email: {
            type: "varchar",
            length: 30
        }
    }
});