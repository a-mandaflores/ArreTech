const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class tableOrder1631538116639 {

    async up(queryRunner) {

        await queryRunner.query(`CREATE TABLE tb_order 
        (id INT PRIMARY KEY AUTO_INCREMENT, amount FLOAT NOT NULL, status VARCHAR(15), userId INT, 
        FOREIGN KEY (userId) REFERENCES tb_user(id))`)
    }

    async down(queryRunner) {
        await queryRunner.dropTable('tb_order')
    }
}
        