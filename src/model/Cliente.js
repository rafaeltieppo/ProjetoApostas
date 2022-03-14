const { Model, DataTypes } = require('sequelize');

class Cliente extends Model {
    static init(datacon) {
        super.init(
            {
               
                nome: {
                    type: DataTypes.STRING(250),
                    allowNull: false,
                },
                cpf: {
                    type: DataTypes.INTEGER,
                    allowNull: false,  
                    unique: true
                },
                nascimento: {
                    type: DataTypes.DATE,
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
                saldo: {
                    type: DataTypes.DECIMAL(5, 2),
                    allowNull: true
                }
            },

            {
                sequelize: datacon,
                tableName: 'clientes',
                modelName: 'cliente'
            }
            
        );
    }

    // static associate(models) {
    //     Cliente.hasMany(models.aposta, { foreignKey: 'id_cliente' });
    // }
}

module.exports = Cliente;