const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class tableStore1631536822918 {

    async up(queryRunner) {

        await queryRunner.query(`CREATE TABLE tb_store 
        (id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(30) NOT NULL, city VARCHAR(30), state VARCHAR(2), manager VARCHAR(30) NOT NULL)`)
    
        await queryRunner.query(`INSERT INTO tb_store
        (name, city, state, manager)
        VALUES
        ('Loja Tijuca', 'Rio de Janeiro', 'RJ', 'Vitória Lívia Luzia Drumond'),
        ('Loja Meier', 'Rio de Janeiro', 'RJ', 'Tatiane Cristin'),
        ('Loja Centro', 'Rio de Janeiro', 'RJ', 'Michelly Nobrega'),
        ('Loja Asa Norte', 'Rio de Janeiro', 'RJ', 'Maykon Sulivan'),
        ('Loja Largo 13', 'São Paulo', 'SP', 'Aline Rodrigues'),
        ('Loja Centro-sul', 'Rio de Janeiro', 'RJ', 'Iolanda Resplande'),
        ('Loja Pinheiros', 'São Paulo', 'SP', 'Luzia Messias')`)
    }

    async down(queryRunner) {
        await queryRunner.dropTable('tb_store')
    }
}
        