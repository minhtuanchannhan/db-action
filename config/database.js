require('dotenv').config();

module.exports = {
	username: process.env.DB_USER || '',
	password: process.env.DB_PASSWORD || '',
	database: process.env.DB_NAME || '',
	port: process.env.DB_PORT || '3306',
	host: process.env.DB_HOST || 'localhost',
	dialect: process.env.DB_DIALECT || 'mysql',
	define: {
		charset: 'utf8',
		dialectOptions: {
			collate: 'utf8_general_ci'
		}
	}
};
