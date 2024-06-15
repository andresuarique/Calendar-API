'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const { UserSchema, USER_TABLE } = await import("../models/user.model.js");
    await queryInterface.createTable(USER_TABLE, UserSchema);
  },

  async down(queryInterface, Sequelize) {
    const { USER_TABLE } = await import("../models/user.model.js");
    await queryInterface.dropTable(USER_TABLE);
  }
};
