const { Model, DataTypes } = require('sequelize');

class Ticket extends Model {
    static init(datacon) {
        super.init(
            {
                id_ticket: {
                    type: DataTypes.INTEGER
                },
                saldo: {
                    type: DataTypes.DECIMAL(5, 2),
                    allowNull: false
                }
            },

            {
                sequelize: datacon,
                tableName: 'tickets',
                modelName: 'ticket'
            }
        );
    }
}

module.exports = Ticket;