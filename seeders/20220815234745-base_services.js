'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('app_services', [
      {
        uuid: '5f21bbee-cf4f-4376-a13d-0d5b5fb52043',
        name:'Deep Clean',
        description:'House deep clean.',
        price:450.00,
        status: true
      },
      {
        uuid: '6e28845f-cb30-405a-a56e-01f7b7c32b65',
        name:'Move-in Clean',
        description:'House move-in clean.',
        price:350.00,
        status: true
      },
      {
        uuid: '559d83d2-1148-444e-97a6-a5667c5557a4',
        name:'Move-out Clean',
        description:'House move-out clean.',
        price:190.00,
        status: true
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('app_services', null, {});
  }
};