const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class InsertsTableProduct1631117654278 {

    async up(queryRunner) {

        //populando a tabela tb_users -> é só um teste vou apagar
        await queryRunner
        .manager
        .createQueryBuilder()
        .insert()
        .into('tb_users')
        .values([
          { name: 'Gabriel', email: 'gabriel@gmail.com' }
        ])
        .execute()
    }

    async down(queryRunner) {
        await queryRunner.dropTable('tb_users')
    }
}
        