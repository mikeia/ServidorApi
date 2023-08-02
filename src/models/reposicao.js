const Sequelize = require('sequelize');
const sequelize = require('../db');
const schema = "dbo";

class Reposicao extends Sequelize.Model {}

Reposicao.init(
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
    dt_reposicao: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('GETDATE()')
    },
    cd_usuario: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    LocalConfirmado: {
      type: Sequelize.STRING,
      allowNull: false
    },
    qt_confirmada: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    confirmado_estoque: {
      type: Sequelize.STRING,
      allowNull: false
    },
    LocalExcesso: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  {
    sequelize, // Passe a instância do Sequelize aqui
    modelName: 'espItemReposicaoPrateleira',
    schema,
    freezeTableName: true
  }
);

Reposicao.removeAttribute('id'); // Remover a coluna "id" gerada automaticamente pelo Sequelize

module.exports = Reposicao;
