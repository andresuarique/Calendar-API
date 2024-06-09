import { Sequelize } from "sequelize";
import { setupModels } from "../database/models";
import dotenv from 'dotenv';
dotenv.config();
import { config } from "../config/config.js";

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;


const sequelize = new Sequelize(URI,{
    host: process.env.POSTGRES_HOST,
    dialect: 'postgres'
});

setupModels(sequelize);

export {sequelize};