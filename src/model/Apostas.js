const { Model, DataTypes } = require('sequelize');

class Aposta extends Model {
    static init(datacon) {
        super.init(
            {
                status_aposta: {
                    type: DataTypes.BOOLEAN,
                    allowNull: false
                },
                time_1: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    references: {
                        model: 'teams',
                        key: 'id'
                    }
                },
                time_2: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    references: {
                        model: 'teams',
                        key: 'id'
                    }
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
                    type: DataTypes.STRING(10),
                    allowNull: false
                },
                id_assistente: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    references: {
                        model: 'assistentes',
                        key: 'id'
                    }
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
        Aposta.belongsTo(models.team, { foreingKey: 'id' });
        Aposta.belongsTo(models.assistente, { foreingKey: 'id' });
    }
}

module.exports = Aposta;