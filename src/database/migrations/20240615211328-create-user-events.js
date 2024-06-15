'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const { UserEventSchema, USER_EVENT_TABLE } = await import("../models/user-events.model.js"); 
    await queryInterface.createTable(USER_EVENT_TABLE, UserEventSchema);
  },

  async down (queryInterface, Sequelize) {
    const { USER_EVENT_TABLE } = await import("../models/user-events.model.js");
    await queryInterface.dropTable(USER_EVENT_TABLE); 
  }
};
