var EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
    name: "Store", //nome da entidade, e por default nome da tabela no bd
    tableName: "tb_stores", //redefinindo o nome da tabela no bd
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
        city: {
            type: "varchar",
            length: 30
        },
        state: {
            type: "varchar",
            length: 30
        }
    }
});