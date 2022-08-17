'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('app_employees',
      [
        {
          uuid: '666c0481-86f0-4352-b189-3a273f4c6c7a',
          name: 'James Reece',
          phone: '1 345567845',
          status: true
        },
        {
          uuid: 'de6f5541-1691-4991-a23a-57581c8749cf',
          name: 'John Wick',
          phone: '55 11 998765423',
          status: true
        }
      ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('app_employees', null, {});
  }
};
