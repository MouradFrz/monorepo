import Sequelize, { QueryInterface } from 'sequelize';
const TABLE_NAME = 'products';
export default {
  up: async (queryInterface: QueryInterface): Promise<void> => {
    await queryInterface.createTable(TABLE_NAME, {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      sku: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      userId: {
        type: Sequelize.INTEGER,
        references: { model: 'Users', key: 'id' },
        allowNull: false,
        onUpdate: 'CASCADE',
      },
    });
  },
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable(TABLE_NAME);
  },
};
