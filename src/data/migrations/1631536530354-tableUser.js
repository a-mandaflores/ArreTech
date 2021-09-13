const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class tableUser1631536530354 {

    async up(queryRunner) {

        
        await queryRunner.query(`CREATE TABLE tb_user 
        (id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(30) NOT NULL, email VARCHAR(30) NOT NULL, password VARCHAR(15) NOT NULL)`)
    }

    async down(queryRunner) {
        await queryRunner.dropTable('tb_user')
    }
}
        