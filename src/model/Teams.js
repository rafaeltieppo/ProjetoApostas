const { Model, DataTypes } = require('sequelize');

class Team extends Model {
    static init(datacon) {
        super.init(
            {
                nome_time: {
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

    static associate(models) {
        Team.hasMany(models.aposta, { foreignKey: 'id' })
    }
}

module.exports = Team;