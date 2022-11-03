'use strict';
require('dotenv').config()
const crypt = require('../api/v1/src/utils/crypt')
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('app_clients', [
      {
        uuid: '7b5fa69a-30e8-4f28-a567-d1f8fdae5ec4',
        name: crypt.encrypt('John Doe'),
        phone: crypt.encrypt('1 897654323'),
        address: crypt.encrypt('Rua A'),
        city: crypt.encrypt('Monte Mor'),
        state: crypt.encrypt('SP'),
        cost:crypt.encrypt('100'),
        total_revenue: crypt.encrypt('120'),
        email: crypt.encrypt('john@app.com'),
        details: crypt.encrypt('John Doe é meu cliente'),
        status: true
      },
      {
        uuid: '7b5fa69a-30e8-4f28-a567-d1f8fdae5ec5',
        name: crypt.encrypt('Mary Blue'),
        phone: crypt.encrypt('9 897654323'),
        address: crypt.encrypt('Rua B'),
        city: crypt.encrypt('Taiobeiras'),
        state: crypt.encrypt('MG'),
        cost:crypt.encrypt('200'),
        total_revenue: crypt.encrypt('220'),
        email: crypt.encrypt('mary@app.com'),
        details: crypt.encrypt('Mary é meu cliente'),
        status: true
      },
      {
        uuid: '7b5fa69a-30e8-4f28-a567-d1f8fdae5ec3',
        name: crypt.encrypt('Lucas Blue'),
        phone: crypt.encrypt('10 897654323'),
        address: crypt.encrypt('Rua C'),
        city: crypt.encrypt('Curitiba'),
        state: crypt.encrypt('CT'),
        cost:crypt.encrypt('400'),
        total_revenue: crypt.encrypt('420'),
        email: crypt.encrypt('blue.l@app.com'),
        details: crypt.encrypt('Lucas é meu cliente'),
        status: true
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('app_clients', null, {});
  }
};