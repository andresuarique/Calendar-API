'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const { TagSchema, TAG_TABLE } = await import("../models/tag.model.js"); 
    await queryInterface.createTable(TAG_TABLE, TagSchema);
  },

  async down (queryInterface, Sequelize) {
    const { TAG_TABLE } = await import("../models/tag.model.js");
    await queryInterface.dropTable(TAG_TABLE); 
  }
};
