'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('app_payslips',
      [
        {
          uuid:'4f90287b-2ed6-4815-9bcb-262d442e6cc0',
          employee:'666c0481-86f0-4352-b189-3a273f4c6c7a',
          service:'6e28845f-cb30-405a-a56e-01f7b7c32b65',
          client:'b2d95cd7-6c5b-4241-8ef2-6a95b2576',
          service_billing:1000.00,
          employee_hours:40,
          employee_salary:13.45,
          employee_discounts:30.00,
          employee_discounts_description: 'Lorem Ipsum',
          employee_car_efficiency: 10,
          employee_miles_travelled: 120.00,
          employee_gas_cost:3.23,
          employee_gains: 350,
          employer_gains: 450,
          status: true
        },
        {
          uuid:'fd776fc2-a36b-4b9d-9457-4d830aaca0e2',
          employee:'666c0481-86f0-4352-b189-3a273f4c6c7a',
          service:'5f21bbee-cf4f-4376-a13d-0d5b5fb52043',
          client:'7b5fa69a-30e8-4f28-a567-d1f8fdae5ec4',
          service_billing: 4500.34,
          employee_hours: 44.00,
          employee_salary:14.55,
          employee_discounts: 31.50,
          employee_discounts_description: 'Lorem Ipsum',
          employee_car_efficiency: 10,
          employee_miles_travelled: 80,
          employee_gains: 350,
          employer_gains: 450,
          employee_gas_cost: 3.12,
          status: true
        },
        {
          uuid:'697367b4-0b8c-46f7-ada2-016d7e975b0e',
          employee:'de6f5541-1691-4991-a23a-57581c8749cf',
          service:'5f21bbee-cf4f-4376-a13d-0d5b5fb52043',
          client:'b2d95cd7-6c5b-4241-8ef2-6a95b2576',
          service_billing:2500.99,
          employee_hours:42.5,
          employee_salary: 17.50,
          employee_car_efficiency: 10,
          employee_discounts: 10.50,
          employee_discounts_description: 'Lorem Ipsum',
          employee_miles_travelled: 90.34,
          employee_gas_cost: 3.48,
          employee_gains: 350,
          employer_gains: 450,
          status: true
        }
      ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('app_payslips', null, {});
  }
};
