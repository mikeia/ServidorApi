const Sequelize = require('sequelize');
const sequelize = require('../db');
const schema = 'dbo';

class NotaEntrada extends Sequelize.Model {}

NotaEntrada.init(
  {
    cd_empresa: {
      type: Sequelize.STRING,
      allowNull:false,
      primaryKey:true
    },
    cd_cadastro:{
      type: Sequelize.STRING,
      allowNull:false,
      primaryKey:true
    },
    serie: {
      type: Sequelize.STRING,
      allowNull:false,
      primaryKey:true
    },
    nr_nota: {
      type: Sequelize.STRING,
      allowNull:false,
      primaryKey:true
    },
    dt_lancamento:{
      type: Sequelize.DATE
    }
  },
  {
    sequelize, // Passe a instância do Sequelize aqui
    modelName: 'NotaEntrada',
    timestamps: false,
    schema,
    freezeTableName: true,
  }
);

NotaEntrada.removeAttribute('id'); // Remover a coluna "id" gerada automaticamente pelo Sequelize


module.exports =  NotaEntrada ;
