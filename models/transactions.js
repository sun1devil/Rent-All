module.exports = function(sequelize, DataTypes) {
    var Transactions = sequelize.define("Transactions",{
        start_date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        end_date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        total_cost: {
            type: DataTypes.DECIMAL(12,2),
            allowNull: false 
        }
    });

    Transactions.associate = function(models){
        Transactions.belongsTo(models.Accounts, {foreignKey: "renter_id"});
    }

     Transactions.associate = function(models){
        Transactions.belongsTo(models.Items, {foreignKey: "items_id"});
    }

    return Transactions;
}