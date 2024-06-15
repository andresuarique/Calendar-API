'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const { EventTagSchema, EVENT_TAG_TABLE } = await import("../models/event-tags.model.js"); 
    await queryInterface.createTable(EVENT_TAG_TABLE, EventTagSchema);
  },

  async down (queryInterface, Sequelize) {
    const { EVENT_TAG_TABLE } = await import("../models/event-tag.model.js");
    await queryInterface.dropTable(EVENT_TAG_TABLE); 
  }
};
