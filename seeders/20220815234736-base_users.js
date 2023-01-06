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
        password: crypt.hash('ech0@APP'),
        role: 'f2a078a3-8b2b-4a38-903f-ecec2422fcd4',
        status: true
      },
      {
        uuid: uuid.genUUID(),
        name: crypt.encrypt('Jessica Ortiz'),
        email: 'jessicaalianeortiz@gmail.com',
        password: crypt.hash('Xp@h0@APP22ghH'),
        role: 'f2a078a3-8b2b-4a38-903f-ecec2422fcd4',
        status: true
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('app_users', null, {});
  }
};
