const Sequelize = require('sequelize');
const database = require('../lib/database');
const EmployeeModel = require('./employeeModel');
const ClientModel = require('./clientModel');
const ServiceModel = require('./serviceModel');

const PayslipModel = database.define('app_payslips',
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
    employee_work_hours: {
      type: Sequelize.FLOAT,
      defaultValue: 0,
      allowNull: true
    },
    employee_salary_hours: {
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
    employee_gas_price: {
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
    employee_tips: {
      type: Sequelize.FLOAT,
      defaultValue: 0.00,
      allowNull: false
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
)
PayslipModel.belongsTo(ServiceModel,
  {
    constraint: true,
    foreignKey: 'uuid'
  }
)
PayslipModel.belongsTo(ServiceModel,
  {
    constraint: true,
    foreignKey: 'uuid'
  }
)
PayslipModel.belongsTo(ServiceModel,
  {
    constraint: true,
    foreignKey: 'uuid'
  }
)
ServiceModel.hasMany(PayslipModel,
  {
    constraint: true,
    foreignKey: 'uuid'
  }
)
EmployeeModel.hasMany(PayslipModel,
  {
    constraint: true,
    foreignKey: 'uuid'
  }
)
ClientModel.hasMany(PayslipModel,
  {
    constraint: true,
    foreignKey: 'uuid'
  }
)

PayslipModel.beforeCreate(function (model) {
  model.service_billing = crypt.encrypt(model.service_billing),
  model.employee_work_hours = crypt.encrypt(model.employee_work_hours),
  model.employee_salary_hours = crypt.encrypt(model.employee_salary_hours),
  model.employee_discounts = crypt.encrypt(model.employee_discounts),
  model.employee_discounts_description = crypt.encrypt(model.employee_discounts_description),
  model.employee_car_efficiency = crypt.encrypt(model.employee_car_efficiency),
  model.employee_miles_travelled = crypt.encrypt(model.employee_miles_travelled),
  model.employee_gas_price = crypt.encrypt(model.employee_gas_price),
  model.employee_gains = crypt.encrypt(model.employee_gains),
  model.employer_gains = crypt.encrypt(model.employer_gains),
  model.employee_tips = crypt.encrypt(model.employee_tips)
});

module.exports = PayslipModel