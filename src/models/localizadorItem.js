const Sequelize = require('sequelize');
const sequelize = require('../db');
const schema = "dbo";


class LocalizadorItem extends Sequelize.Model {}

LocalizadorItem.init(
  {
    cd_empresa:{
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    }, 
    cd_item :{
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true
    },
    local1_1 :{
      type: Sequelize.STRING,
      allowNull: false,
    }, 
    local1_2 :{
      type: Sequelize.STRING,
      allowNull: false,
    }, 
    local1_3 :{
      type: Sequelize.STRING,
      allowNull: false,
    },
    local1_4 :{
      type: Sequelize.STRING,
      allowNull: false,
    }, 
    local2_1 :{
      type: Sequelize.STRING,
      allowNull: false,
    }, 
    local2_2 :{
      type: Sequelize.STRING,
      allowNull: false,
    }, 
    local2_3 : {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  {
    sequelize, // Passe a instância do Sequelize aqui
    modelName: 'espItemLocalizador',
    schema,
    freezeTableName: true
  }
);


LocalizadorItem.removeAttribute('id'); // Remover a coluna "id" gerada automaticamente pelo Sequelize

module.exports = LocalizadorItem;
