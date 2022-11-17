'use strict';
const uuid = require('../api/v1/src/utils/uuid')
const crypt = require('../api/v1/src/utils/crypt')

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('app_payslips',
      [
        {
          uuid: uuid.genUUID(),
          employee:'5804ba7c-3e47-46db-b5b8-9322f25533c3',
          service:'0efa944b-78af-422a-a5f1-e3aca4521672',
          client:'56fcf8bf-b017-4197-abcc-ce9b3e3eaeba',
          service_billing:  crypt.encrypt('200.00'),
          employee_work_hours: crypt.encrypt('10'),
          employee_salary_hours: crypt.encrypt('10.00'),
          employee_discounts: crypt.encrypt('1.00'),
          employee_discounts_description: crypt.encrypt('This is a test for description'),
          employee_car_efficiency: crypt.encrypt('0'),
          employee_miles_travelled: crypt.encrypt('0'),
          employee_gas_price: crypt.encrypt('0'),
          employee_gains: crypt.encrypt('104.80'),
          employer_gains: crypt.encrypt('101.00'),
          employee_tips: crypt.encrypt('5.80'),
          employee_service_percentage: crypt.encrypt('50.80'),
          status: true
        }
      ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('app_payslips', null, {});
  }
};
