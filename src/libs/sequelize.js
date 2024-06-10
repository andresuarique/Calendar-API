import { Sequelize } from "sequelize";
import { config } from "./../config/config.js";
import { setupModels } from "../database/models/index.js";

const sequelize = new Sequelize(config.dbUrl, {
  dialect: 'postgres',
  logging: true,
});

setupModels(sequelize);


export const models = sequelize.models;
export {sequelize};