import dotenv from 'dotenv';
dotenv.config();
import { config } from "../config/config.js";


const dbConfig = {
    development: {
        url: config.dbUrl,
        dialect: 'postgres'
    },
    production: {
        url: config.dbUrl,
        dialect: 'postgres'
    }
};

export default dbConfig;