const { Model, DataTypes } = require('sequelize');

class ClienteAposta extends Model { 
    static init(datacon) {
        super.init(
            {
                id_cliente: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    references: {
                        model: 'clientes',
                        key: 'id'
                    }
                },
                id_aposta: {
                    type: DataTypes.INTEGER,
                    allowNull: false,  
                    references: {
                        model: 'apostas',
                        key: 'id'
                    }
                },
            },
            {
                sequelize: datacon,
                tableName: 'cliente_aposta',
                modelName: 'clienteAposta'
            }            
        ); 
    }

    static associate(models) {     
        ClienteAposta.belongsTo(models.aposta, { foreignKey: 'id' });
        ClienteAposta.belongsTo(models.cliente, { foreignKey: 'id' });
    }
}

module.exports = ClienteAposta;