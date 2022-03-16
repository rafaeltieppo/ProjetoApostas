const { Model, DataTypes } = require('sequelize');

class Team extends Model {
    static init(datacon) {
        super.init(
            {
                nome_time1: {
                    type: DataTypes.STRING(40),
                    allowNull: false
                },
                nome_time2: {
                    type: DataTypes.STRING(40),
                    allowNull: false
                },
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