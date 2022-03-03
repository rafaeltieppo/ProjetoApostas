const { Model, DataTypes } = require('sequelize');

class Aposta extends Model {
    static init(datacon) {
        super.init(
            {
                id_aposta: {
                    type: DataTypes.INTEGER
                },
                status_aposta: {
                    type: DataTypes.BOOLEAN,
                    allowNull: false
                },
                time_1: {
                    type: DataTypes.STRING(40),
                    allowNull: false
                },
                time_2: {
                    type: DataTypes.STRING(40),
                    allowNull: false
                },
                tempo_do_jogo: {
                    type: DataTypes.TIME(2),
                    allowNull: false
                },
                porcentagem: {
                    type: DataTypes.INTEGER,
                    allowNull: false
                },
                placar: {
                    type: DataTypes.STRING,
                    allowNull: false
                }
            },

            {
                sequelize: datacon,
                tableName: 'apostas',
                modelName: 'aposta'
            }
        );
    }

    static associate(models) {

    }
}

module.exports = Aposta;