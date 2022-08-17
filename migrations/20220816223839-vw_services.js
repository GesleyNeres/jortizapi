'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      `
      CREATE VIEW vw_services as 
      select serv.uuid as "id", serv.name as "name", serv.description as "description", serv.price as "base_price", serv."updatedAt" as "update"
 from app_services as serv`
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query('drop view vw_services');
  }
};
