import { Sequelize } from "sequelize";
import { setupModels } from "../database/models/index.js";
import dotenv from 'dotenv';
dotenv.config();
import { config } from "../config/config.js";

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

console.log("config:"+URI);

const sequelize = new Sequelize(URI,{
    //host: process.env.POSTGRES_HOST,
    dialect: 'postgres'
});

setupModels(sequelize);

export {sequelize};