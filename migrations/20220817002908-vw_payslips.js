'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      `
      CREATE VIEW vw_payslips as 
      select pay.uuid as "id", cli.name as "client" , serv.name as "service", emp.name as "employee", pay.service_billing as "billing",pay.employee_hours as "employee_work_hours", pay.employee_salary as "employee_hour_salary", pay.employee_discounts  as "employee_discounts",
pay.employee_miles_travelled as "employee_miles_travelled", pay.employee_gas_cost as "employee_gas_cost", 
(((pay.employee_hours * pay.employee_salary) - pay.employee_discounts) + (pay.employee_miles_travelled * pay.employee_gas_cost)) as "employee_payslip",
 ( pay.service_billing - ((pay.employee_hours * pay.employee_salary)+((pay.employee_miles_travelled / pay.employee_car_efficiency ) * pay.employee_gas_cost)) + pay.employee_discounts ) as "employer_profit" , pay."updatedAt" as "date" 
from app_payslips as pay 
inner join app_employees as emp 
on pay.employee = emp.uuid 
inner join app_services as serv 
on pay.service = serv.uuid 
inner join app_clients as cli 
on pay.client = cli.uuid`
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query('drop view vw_payslips');
  }
};
