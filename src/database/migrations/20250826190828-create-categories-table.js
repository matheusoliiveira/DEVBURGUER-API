/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("categories", {
      id: {
        type: Sequelize.INTEGER,
        aloowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        aloowNull: false,
        unique: true,
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
    await queryInterface.dropTable("categories")
  },
}
