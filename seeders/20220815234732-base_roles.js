'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('app_roles', [
      {
        uuid: '0edeed7f-1d84-41a7-b0b0-3fd11fb2e625',
        name: 'app_usr_dft',
        description: 'Default user\'s roles.',
        status: true
      },
      {
        uuid: '418e8a02-7521-4f69-881a-d54a09f4425f',
        name: 'app_usr_adm',
        description: 'Admin user\'s roles.',
        status: true
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('app_roles', null, {});
  }
};
