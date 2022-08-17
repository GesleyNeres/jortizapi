'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('app_employees',
      {
        uuid: {
          type: Sequelize.UUID,
          allowNull: false,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        phone: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
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
        updatedAt:{
          type: Sequelize.DATE,
          defaultValue: Date.now(),
          allowNull: false
        }
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('app_employees');
  }
};
