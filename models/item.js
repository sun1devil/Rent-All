module.exports = function(sequelize, DataTypes){
    var Items = sequelize.define("Items",{
        item_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1,60]
            }
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                len:[1,255]
            }
        },
        price: {
            type: DataTypes.DECIMAL(8,2),
            allowNull: false 
        },
        start_date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        end_date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        picture_link: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len:[1,255]
            }
        },
        available: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }

    });

    Items.associate = function(models){
        Items.belongsTo(models.Accounts, {
            foreignKey: "owner_id"
        });
    }

    Items.associate = function(models){
        Items.hasMany(models.Transactions, {
            foreignKey: "item_id"
        })
    }

    return Items;
}