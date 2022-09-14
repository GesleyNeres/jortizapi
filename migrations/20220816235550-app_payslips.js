'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('app_payslips',
      {
        uuid: {
          type: Sequelize.UUID,
          allowNull: false,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true
        },
        employee: {
          type: Sequelize.UUID,
          references: {
            model: 'app_employees',
            key: 'uuid'
          },
          allowNull: false
        },
        client: {
          type: Sequelize.UUID,
          references: {
            model: 'app_clients',
            key: 'uuid'
          },
          allowNull: false
        },
        service: {
          type: Sequelize.UUID,
          references: {
            model: 'app_services',
            key: 'uuid'
          },
          allowNull: false
        },
        service_billing: {
          type: Sequelize.FLOAT,
          defaultValue: 0.00,
          allowNull: false
        },
        employee_hours: {
          type: Sequelize.FLOAT,
          defaultValue: 0,
          allowNull: true
        },
        employee_salary: {
          type: Sequelize.FLOAT,
          defaultValue: 0.00,
          allowNull: true
        },
        employee_service_percentage: {
          type: Sequelize.FLOAT,
          defaultValue: 0.00,
          allowNull: true
        },
        employee_discounts: {
          type: Sequelize.FLOAT,
          defaultValue: 0.00,
          allowNull: true
        },
        employee_discounts_description: {
          type: Sequelize.STRING,
          allowNull: true,
          defaultValue: ''
        },
        employee_miles_travelled: {
          type: Sequelize.FLOAT,
          defaultValue: 0.00,
          allowNull: true
        },
        employee_gas_cost: {
          type: Sequelize.FLOAT,
          defaultValue: 0.00,
          allowNull: true
        },
        employee_car_efficiency: {
          type: Sequelize.FLOAT,
          defaultValue: 0.00,
          allowNull: true
        },
        employee_gains: {
          type: Sequelize.FLOAT,
          defaultValue: 0.00,
          allowNull: false
        },
        employer_gains: {
          type: Sequelize.FLOAT,
          defaultValue: 0.00,
          allowNull: false
        },
        status: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false
        },
        createdAt: {
          type: Sequelize.DATE,
          defaultValue: Date.now(),
          allowNull: false
        },
        updatedAt: {
          type: Sequelize.DATE,
          defaultValue: Date.now(),
          allowNull: false
        }
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('app_payslips');
  }
};
