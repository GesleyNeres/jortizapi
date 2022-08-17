'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      `
      CREATE VIEW vw_employees as 
      select emp.uuid as "id", emp.name as "name", emp.phone as "phone", emp."updatedAt" as "update"
 from app_employees as emp`
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query('drop view vw_employees');
  }
};
