const Sequelize = require('sequelize');

const sequelizeInstance = new Sequelize('xxx', 'xxx', 'xxx', {
  dialect: 'mssql',
  host: 'localhost',
  port:1433,
  define: {
    timestamps: false
  },
  dialectOptions: {
    options: {
      encrypt: false
    }
  }
});

sequelizeInstance.sync();

module.exports = sequelizeInstance;
