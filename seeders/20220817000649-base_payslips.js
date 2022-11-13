'use strict';
const uuid = require('../api/v1/src/utils/uuid')
const crypt = require('../api/v1/src/utils/crypt')

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('app_payslips',
      [
        {
          uuid: uuid.genUUID(),
          employee:'45546173-def2-4662-8321-1c0b30d35f90',
          service:'befe96ca-df33-48f3-b617-1bbb0368316d',
          client:'e0bb92fa-b51c-41bf-8325-cdee4446e332',
          service_billing:  crypt.encrypt('200.00'),
          employee_work_hours:crypt.encrypt('10'),
          employee_salary_hours:crypt.encrypt('10.00'),
          employee_discounts:crypt.encrypt('1.00'),
          employee_discounts_description: crypt.encrypt('This is a test for description'),
          employee_car_efficiency: crypt.encrypt('0'),
          employee_miles_travelled: crypt.encrypt('0'),
          employee_gas_price: crypt.encrypt('0'),
          employee_gains: crypt.encrypt('104.80'),
          employer_gains: crypt.encrypt('101.00'),
          employee_tips: crypt.encrypt('5.80'),
          createdAt: '2022-11-06',
          status: true
        }
      ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('app_payslips', null, {});
  }
};
