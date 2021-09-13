const { MigrationInterface, QueryRunner } = require("typeorm");


module.exports = class tableProduct1631534253127 {

    async up(queryRunner) {

        await queryRunner.query(`CREATE TABLE tb_product 
        (id INT PRIMARY KEY AUTO_INCREMENT, description VARCHAR(250), producer VARCHAR(30) NOT NULL, price FLOAT NOT NULL)`)

        await queryRunner.query(`INSERT INTO tb_product
        (description, producer, price)
        VALUES
        ('Geladeira Frost Free Duplex 462 litros','Brastemp',3492.72),
        ('Fogão 5 bocas Inox','Consul',1789.00),
        ('Smart TV 65” 4K NEO QLED Mini Led','Samsung', 10924.05),
        ('Notebook 2 em 1 Inspiron 5406-M30S 14”', 'Dell',6029.10),
        ('Micro-ondas MTD30 - 20L','Eletrolux',559.00),
        ('Smartphone Galaxy S20 FE 128GB','Samsung', 2219.00),
        ('Lava e Seca 10kg BNQ10AS Inverter','Brastemp', 4299.00),
        ('Ar Condicionado Split Inverter 12.000 BTU','Samsung',1859.80),
        ('Jogo de Panelas Antiaderente','Tramontina', 299.90)`)
    
    }

    async down(queryRunner) {
        await queryRunner.dropTable('tb_product')
    }
}
        