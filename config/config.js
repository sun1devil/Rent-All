// var fs = require('fs');
// console.log(process.env.SEQUELIZE_USER);
// console.log(process.env.SEQUELIZE_PASSWORD);
// console.log(process.env.SEQUELIZE_HOST);

module.exports = {
  "development": {
    "username": process.env.SEQUELIZE_USER,
    "password": process.env.SEQUELIZE_PASSWORD,
    "database": "rent_all_db",
    "host": process.env.SEQUELIZE_HOST,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": "password",
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql"
  }
}
