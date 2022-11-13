'use strict';
const uuid = require('../api/v1/src/utils/uuid')

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('app_roles', [
      {
        uuid: uuid.genUUID(),
        name: 'app_usr_dft',
        description: 'Default user\'s roles.',
        status: true
      },
      {
        uuid: uuid.genUUID(),
        name: 'app_usr_adm',
        description: 'Admin user\'s roles.',
        status: true
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('app_roles', null, {});
  }
};
