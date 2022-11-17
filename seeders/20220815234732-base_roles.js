'use strict';
const uuid = require('../api/v1/src/utils/uuid')

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('app_roles', [
      {
        uuid: /* uuid.genUUID() */'f2a078a3-8b2b-4a38-903f-ecec2422fcd6',
        name: 'app_usr_dft',
        description: 'Default user\'s roles.',
        status: true
      },
      {
        uuid: /* uuid.genUUID() */'f2a078a3-8b2b-4a38-903f-ecec2422fcd4',
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
