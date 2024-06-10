import { Sequelize } from "sequelize";
import { config } from "./../config/config.js";
import { setupModels } from "../database/models/index.js";

const options = {
  dialect: 'postgres',
  logging: config.isProd ? false : true,
}

if (config.isProd) {
  options.dialectOptions = {
    ssl: {
      rejectUnauthorized: false
    }
  }
}
console.log("libs:"+config.dbUrl);

const sequelize = new Sequelize(config.dbUrl, options);

setupModels(sequelize);


export const models = sequelize.models;
export {sequelize};