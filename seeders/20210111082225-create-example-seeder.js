'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('examples', [{
			id: 1,
			name: 'Example',
			created_at: new Date(),
			updated_at: new Date()
		}], {});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('examples', null, {});
	}
};
