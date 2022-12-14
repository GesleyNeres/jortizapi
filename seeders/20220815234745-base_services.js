'use strict';
const uuid = require('../api/v1/src/utils/uuid')
const crypt = require('../api/v1/src/utils/crypt')
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('app_services', [
      {
        uuid: /* uuid.genUUID() */'0efa944b-78af-422a-a5f1-e3aca4521672',
        name: crypt.encrypt('Deep Clean'),
        description: crypt.encrypt('House deep clean.'),
        price: crypt.encrypt('450.00'),
        status: true
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('app_services', null, {});
  }
};