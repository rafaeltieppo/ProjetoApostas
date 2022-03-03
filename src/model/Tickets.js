const { Model, DataType } = require('sequelize');

class Ticket extends Model {
    static init(datacon) {
        super.init(
            {
                id_ticket: {
                    type: DataType.INTEGER
                },
                saldo: {
                    type: DataType.DECIMAL(5, 2),
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