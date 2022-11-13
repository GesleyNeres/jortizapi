'use strict';
require('dotenv').config()
const crypt = require('../api/v1/src/utils/crypt')
const uuid = require('../api/v1/src/utils/uuid')

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('app_employees',
      [
        {
          uuid: uuid.genUUID(),
          name: crypt.encrypt('Jessica Aliane Ortiz'),
          phone: crypt.encrypt('+1 656 3225291'),
          status: true
        }
      ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('app_employees', null, {});
  }
};
