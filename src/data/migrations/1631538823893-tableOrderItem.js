const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class tableOrderItem1631538823893 {

    async up(queryRunner) {

        await queryRunner.query(`CREATE TABLE tb_order_item
        (id INT PRIMARY KEY AUTO_INCREMENT, price FLOAT, quantity INT NOT NULL, totalPrice FLOAT, 
            productId INT, orderId INT, FOREIGN KEY (productId) REFERENCES tb_product(id),
                FOREIGN KEY (orderId) REFERENCES tb_order(id))`)
    }

    async down(queryRunner) {

        await queryRunner.dropTable('tb_order_item')
    }
}
        