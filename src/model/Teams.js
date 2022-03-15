const { Model, DataTypes } = require('sequelize');

class Team extends Model {
    static init(datacon) {
        super.init(
            {
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