'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('app_users', [
      {
        uuid: '58880359-05b4-4901-aaa0-696e2d02b5e1',
        name: 'App Admin',
        email:'admin@app.com',
        password:'senh@123',
        role: '418e8a02-7521-4f69-881a-d54a09f4425f',
        status: true
      },
      {
        uuid: '11f7bacc-2069-4951-a896-cb790a44fa1a',
        name: 'App Reader',
        email:'reader@app.com',
        password:'senh@123',
        role: '0edeed7f-1d84-41a7-b0b0-3fd11fb2e625',
        status: true
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('app_users', null, {});
  }
};
