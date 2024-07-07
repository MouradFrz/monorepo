import Sequelize, { QueryInterface } from 'sequelize';
export default {
  async up(queryInterface: QueryInterface) {
    queryInterface.addColumn('Users', 'email', Sequelize.STRING);
    queryInterface.addColumn('Users', 'role', Sequelize.STRING);
    queryInterface.addColumn('Users', 'flags', Sequelize.STRING);
    queryInterface.addColumn('Users', 'password', Sequelize.STRING);
    return;
  },

  async down(queryInterface: QueryInterface) {
    queryInterface.removeColumn('Users', 'email');
    queryInterface.removeColumn('Users', 'role');
    queryInterface.removeColumn('Users', 'flags');
    queryInterface.removeColumn('Users', 'password');
    return queryInterface.dropTable('Users');
  },
};
