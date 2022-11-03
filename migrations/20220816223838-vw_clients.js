'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      `
      CREATE VIEW vw_clients as 
      select cli.uuid as "id", cli.name as "name", cli.email as "email", cli.phone as "phone", 
      cli.address as "address", cli.city as "city", cli.state as "state", cli.cost as "cost", 
      cli.total_revenue as "total_revenue", cli.details as "details", cli."updatedAt" as "update"
      from app_clients as cli`
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query('drop view vw_clients');
  }
};
