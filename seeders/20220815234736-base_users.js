'use strict';
require('dotenv').config()
const crypt = require('../api/v1/src/utils/crypt')
const uuid = require('../api/v1/src/utils/uuid')

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('app_users', [
      {
        uuid: uuid.genUUID(),
        name: crypt.encrypt('Gesley Neres'),
        email: 'neres.gesley@gmail.com',
        password: crypt.hash('IhaAa!'),
        role: 'bb6214f9-8c3b-4e31-bd97-5fccc72f6866',
        status: true
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('app_users', null, {});
  }
};
