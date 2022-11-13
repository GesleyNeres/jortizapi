'use strict';
require('dotenv').config()
const crypt = require('../api/v1/src/utils/crypt')
const uuid = require('../api/v1/src/utils/uuid')

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('app_clients', [
      {
        uuid: uuid.genUUID(),
        name: crypt.encrypt('Gesley Neres'),
        phone: crypt.encrypt('+55 19 995079764'),
        address: crypt.encrypt('Rua Euclides da Cunha 37, Jardim Vitoria'),
        city: crypt.encrypt('Monte Mor'),
        state: crypt.encrypt('SP'),
        cost: crypt.encrypt('120'),
        total_revenue: crypt.encrypt('200'),
        email: crypt.encrypt('neres.gesley@gmail.com'),
        details: crypt.encrypt('This is the first client'),
        status: true
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('app_clients', null, {});
  }
};