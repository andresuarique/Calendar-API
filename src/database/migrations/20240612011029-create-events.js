'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const { EventSchema, EVENT_TABLE } = await import("../models/event.model.js"); 
    await queryInterface.createTable(EVENT_TABLE, EventSchema);
  },

  async down (queryInterface, Sequelize) {
    const { EVENT_TABLE } = await import("../models/event.model.js");
    await queryInterface.dropTable(EVENT_TABLE); 
  }
};
