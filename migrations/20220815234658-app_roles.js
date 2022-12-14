'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('app_roles',
      {
        uuid: {
          type: Sequelize.UUID,
          primaryKey: true,
          defaultValue: Sequelize.UUIDV4
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
          unique:true
        },
        description: {
          type: Sequelize.STRING,
          allowNull: false,
          unique:true
        },
        status: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false
        },
        createdAt: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.fn('now'),
          allowNull: false
        },
        updatedAt:{
          type: Sequelize.DATE,
          defaultValue: Sequelize.fn('now'),
          allowNull: false
        }
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('app_roles');
  }
};
