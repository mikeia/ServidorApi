const Sequelize = require('sequelize');
const sequelize = require('../db');
const schema = "dbo";

class TransEst extends Sequelize.Model {}

TransEst.init(
  {
    cd_empresa: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cd_item: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true
    },
    cd_deposito: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    qt_entrada: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    qt_saida: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
  },
  {
    sequelize, // Passe a instância do Sequelize aqui
    modelName: 'TransEst',
    schema,
    freezeTableName: true
  }
);

TransEst.removeAttribute('id'); // Remover a coluna "id" gerada automaticamente pelo Sequelize

module.exports = TransEst;

// cd_empresa
// cd_item
// cd_deposito
// qt_entrada
// qt_saida