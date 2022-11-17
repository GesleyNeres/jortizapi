'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      `
      CREATE VIEW vw_payslips as 
      select pay.uuid as "uuid", cli.name as "client" , serv.name as "service", 
      emp.name as "employee", pay.service_billing as "service_billing", pay.employee_work_hours as "employee_work_hours", 
      pay.employee_salary_hours as "employee_salary_hours", pay.employee_discounts  as "employee_discounts",
      pay.employee_miles_travelled as "employee_miles_travelled", pay.employee_gas_price as "employee_gas_price", 
      pay.employee_car_efficiency as "employee_car_efficiency", pay.employee_discounts_description as "employee_discounts_description",
      pay.employer_gains as "employer_gains", pay.employee_gains as "employee_gains", pay.employee_service_percentage as "employee_service_percentage",
      pay.reportedAt as "date", DAYNAME(pay.reportedAt) as "weekday", pay.employee_tips as "employee_tips"
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
