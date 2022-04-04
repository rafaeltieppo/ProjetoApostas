const { Model, DataTypes } = require('sequelize');

class Assistente extends Model {
    static init(datacon) {
        super.init(
            {
                nome: {
                    type: DataTypes.STRING(200),
                    allowNull: false
                },
                cpf: {
                    type: DataTypes.INTEGER,
                    allowNull: false
                },
                email: {
                    type: DataTypes.STRING(120),
                    allowNull: false,
                    unique: true
                },
                senha: {
                    type: DataTypes.STRING(100),
                    allowNull: false
                },
            },

            {
                sequelize: datacon,
                tableName: 'assistentes',
                modelName: 'assistente'
            }
        );
    }

    static associate(models) {
        Assistente.hasMany(models.aposta, { foreignKey: 'id_assistente' });
    }
}

module.exports = Assistente;