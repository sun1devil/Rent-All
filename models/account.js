module.exports = function(sequelize, DataTypes) {
    var Accounts = sequelize.define("Accounts", {
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 30]
            }
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 30]
            }
        },
        street: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 30]
            }
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 30]
            }
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 2]
            }
        },
        zip: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [5]
            }
        },
        balance: {
            type: DataTypes.DECIMAL(12, 2),
            defaultValue: 0
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 100]
            }
        },
        phone: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [10]
            }
        },
        rating: {
            type: DataTypes.DECIMAL(3,2),
            defaultValue: null
        },
        account_key: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len:[8]
            }
        }

    });

    Accounts.associate = function(models){
        Accounts.hasMany(models.Items, {
            foreignKey: "owner_id",
            onDelete: "cascade"
        });
    };

    return Accounts;
}