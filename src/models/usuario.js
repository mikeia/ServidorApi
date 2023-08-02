const Sequelize = require('sequelize');
const sequelize = require('../db');
const schema = "dbo";


class Users extends Sequelize.Model {}

Users.init(
  {
    cd_usuario: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey:true
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    login: {
      type: Sequelize.STRING,
      allowNull: false,
      Upercase: true,
      primaryKey:true
      
    },
    cd_empresa: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'usuario',
    schema,
    freezeTableName: true,
  }
);

Users.removeAttribute('id');

module.exports = Users;
