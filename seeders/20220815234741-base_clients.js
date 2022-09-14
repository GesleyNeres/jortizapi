'use strict';
require('dotenv').config()
const crypt = require('../api/v1/src/utils/crypt')
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('app_clients', [
      {
        uuid: '7b5fa69a-30e8-4f28-a567-d1f8fdae5ec4',
        name: crypt.encrypt('John Doe'),
        email: crypt.encrypt('john@app.com'),
        phone: crypt.encrypt('1 897654323'),
        cost: 450,
        status: true
      },
      {
        uuid: 'b2d95cd7-6c5b-4241-8ef2-6a95b2576',
        name:crypt.encrypt('Mary Blue'),
        email:crypt.encrypt('mblue@app.com'),
        phone:crypt.encrypt('1 89764235'),
        cost: 167,
        status: true
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('app_clients', null, {});
  }
};