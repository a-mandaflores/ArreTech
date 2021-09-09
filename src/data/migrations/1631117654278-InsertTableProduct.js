const { MigrationInterface, QueryRunner } = require("typeorm");


module.exports = class InsertTableProduct16311176542781 {

    async up(queryRunner) {

        //populando a tabela tb_users -> é só um teste vou apagar
        await queryRunner
            .manager
            .createQueryBuilder()
            .insert()
            .into('tb_products')
            .values([
              //  { name: `Geladeira Frost Free Duplex 462 litros`, description: `Geladeira Frost Free Duplex 462 litros`, producer: `Brastemp`, price: 3492.72 },
                { name: `Teste 462 litros`, description: `Geladeira Frost Free Duplex 462 litros`, producer: `Brastemp`, price: 3492.72 }
            ])

            /*
            { name: 'Smart TV 65” 4K NEO QLED Mini Led', description: 'Smart TV 65” 4K NEO QLED Mini Led', producer: 'Samsung', price: 10924.05 },
            { name: 'Notebook 2 em 1 Inspiron 5406-M30S 14', description: 'Notebook 2 em 1 Inspiron 5406-M30S 14', producer: 'Dell', price: 6029.10 },
            { name: 'Micro-ondas MTD30 - 20L', description: 'Micro-ondas MTD30 - 20L', producer: 'Electrolux', price: 559.00 }*/

            .execute();
    }

    async down(queryRunner) {
        await queryRunner.dropTable('tb_products')
    }
}
