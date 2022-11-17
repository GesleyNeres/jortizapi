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
        type: Sequelize.STRING,
        allowNull: false
      },
      employee_work_hours: {
        type: Sequelize.STRING,
        defaultValue: '0',
        allowNull: false
      },
      employee_salary_hours: {
        type: Sequelize.STRING,
        defaultValue: '0',
        allowNull: false
      },
      employee_service_percentage: {
        type: Sequelize.STRING,
        defaultValue: '0',
        allowNull: false
      },
      employee_discounts: {
        type: Sequelize.STRING,
        defaultValue: '0.00',
        allowNull: true
      },
      employee_discounts_description: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: ''
      },
      employee_miles_travelled: {
        type: Sequelize.STRING,
        defaultValue: '0.00',
        allowNull: true
      },
      employee_gas_price: {
        type: Sequelize.STRING,
        defaultValue: '0.00',
        allowNull: true
      },
      employee_car_efficiency: {
        type: Sequelize.STRING,
        defaultValue: '0.00',
        allowNull: true
      },
      employee_gains: {
        type: Sequelize.STRING,
        defaultValue: '0.00',
        allowNull: false
      },
      employer_gains: {
        type: Sequelize.STRING,
        defaultValue: '0.00',
        allowNull: false
      },
      employee_tips: {
        type: Sequelize.STRING,
        defaultValue: '0.00',
        allowNull: true
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      reportedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
        allowNull: false
      }
    }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('app_payslips');
  }
};
