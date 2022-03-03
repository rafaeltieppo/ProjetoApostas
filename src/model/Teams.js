const { Model, DataTypes } = require('sequelize');

class Team extends Model {
    static init(datacon) {
        super.init(
            {
                id_times: {
                    type: DataTypes.INTEGER
                },
                nomes_times: {
                    type: DataTypes.STRING(40),
                    allowNull: false
                }
            },

            {
                sequelize: datacon,
                tableName: 'teams',
                modelName: 'team'
            }
        );
    }
}

module.exports = Team;