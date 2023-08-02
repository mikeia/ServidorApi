const Sequelize = require('sequelize');
const sequelize = require('../db');
const schema = "dbo";
const Users = require('../models/usuario');

class espROLogin extends Sequelize.Model {}

espROLogin.init(
  {
    cd_usuario: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey:true
    },
    reposicao: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'espROLogin',
    schema,
    freezeTableName: true,
  }
);

espROLogin.removeAttribute('id');

Users.hasOne(espROLogin,{foreignKey: 'cd_usuario'});

module.exports = espROLogin;
