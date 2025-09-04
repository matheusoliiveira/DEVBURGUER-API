"use strict"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("products", {
      id: {
        type: Sequelize.INTEGER,
        aloowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        aloowNull: false,
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      category: {
        type: Sequelize.STRING,
        aloowNull: false,
      },
      path: {
        type: Sequelize.STRING,
        aloowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        aloowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        aloowNull: false,
      },
    })
  },

  async down(queryInterface) {
    await queryInterface.dropTable("products")
  },
}
