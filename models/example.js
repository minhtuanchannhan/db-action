'use strict';

module.exports = (sequelize, DataTypes) => {
	const Example = sequelize.define('Example', {
		name: {
			allowNull: false,
			type: DataTypes.STRING,
			unique: true
		},
	}, {
		tableName: 'examples',
		createdAt: 'created_at',
		updatedAt: 'updated_at',
	});

	return Example;
};
