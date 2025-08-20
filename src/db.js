const Sequelize = require('sequelize');

const sequelizeInstance = new Sequelize('Teste', 'testlogin', 'testpassword', {
  dialect: 'mssql',
  host: '192.168.0.9',
  port: 1433,
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
