const Sequelize = require('sequelize');
const database = require('../lib/database');
const EmployeeModel = require('./employeeModel');
const ClientModel = require('./clientModel');
const ServiceModel = require('./serviceModel');
const crypt = require('../utils/crypt')

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
  model.service_billing = crypt.encrypt(parseFloat(model.service_billing).toFixed(2)),
  model.employee_work_hours = crypt.encrypt(parseFloat(model.employee_work_hours).toFixed(2)),
  model.employee_salary_hours = crypt.encrypt(parseFloat(model.employee_salary_hours).toFixed(2)),
  model.employee_discounts = crypt.encrypt(parseFloat(model.employee_discounts).toFixed(2)),
  model.employee_discounts_description = crypt.encrypt(model.employee_discounts_description),
  model.employee_car_efficiency = crypt.encrypt(parseFloat(model.employee_car_efficiency).toFixed(2)),
  model.employee_miles_travelled = crypt.encrypt(parseFloat(model.employee_miles_travelled).toFixed(2)),
  model.employee_gas_price = crypt.encrypt(parseFloat(model.employee_gas_price).toFixed(2)),
  model.employee_gains = crypt.encrypt(parseFloat(model.employee_gains).toFixed(2)),
  model.employer_gains = crypt.encrypt(parseFloat(model.employer_gains).toFixed(2)),
  model.employee_tips = crypt.encrypt(parseFloat(model.employee_tips).toFixed(2))
  model.employee_service_percentage = crypt.encrypt(parseFloat(model.employee_service_percentage).toFixed(2))
});

module.exports = PayslipModel