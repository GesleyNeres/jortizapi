'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('app_clients', [
      {
        uuid: '7b5fa69a-30e8-4f28-a567-d1f8fdae5ec4',
        name:'John Doe',
        email:'john@app.com',
        phone:'1 897654323',
        status: true
      },
      {
        uuid: 'b2d95cd7-6c5b-4241-8ef2-6a95b2576',
        name:'Mary Blue',
        email:'mblue@app.com',
        phone:'1 89764235',
        status: true
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('app_clients', null, {});
  }
};