'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      `
      CREATE VIEW vw_users_logins as 
      select usr.uuid "id", usr.name as "name", usr.email as "email", usr.password as "password", (usr.role || "&" || rol.name) as "role", 
      usr.tokens as "tokens", usr."updatedAt" as "update" 
from app_users as usr 
inner join app_roles as rol 
on usr.role = rol.uuid `
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query('drop view vw_users_logins');
  }
};
