import dotenv from 'dotenv';
dotenv.config();

const config = {
	env: process.env.NODE_ENV || 'development',
	port: process.env.PORT || 3000,
	dbUser: process.env.POSTGRES_USER,
	dbPassword: process.env.POSTGRES_PASSWORD,
	dbHost: process.env.POSTGRES_HOST,
	dbPort: process.env.POSTGRES_PORT,
	dbName: process.env.POSTGRES_DB,
};
export { config };