const Sequelize = require('sequelize');
const sequelize = require('../db');
const schema = "dbo";
const NotaEntrada = require('../models/notaEntrada')


class NotaEItem extends Sequelize.Model {}

NotaEItem.init(
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
    qt_entrada:{
      type: Sequelize.INTEGER,
      allowNull:false
    }
 
  },
  {
    sequelize, // Passe a instância do Sequelize aqui
    modelName: 'NotaEItem',
    timestamps: false,
    schema,
    freezeTableName: true
  }
);

NotaEItem.removeAttribute('id'); // Remover a coluna "id" gerada automaticamente pelo Sequelize

//NotaEntrada.hasOne(NotaEItem, { foreignKey: ['cd_cadastro','nr_nota','serie','cd_empresa'] });
NotaEntrada.hasOne(NotaEItem, {
  foreignKey: {
    name: 'cd_cadastro',
    primaryKey: true
  },
  sourceKey: 'cd_cadastro',
  constraints: true // Remova essa linha se as chaves estrangeiras forem obrigatórias
});
NotaEntrada.hasOne(NotaEItem, {
  foreignKey: {
    name: 'nr_nota',
    primaryKey: true
  },
  sourceKey: 'nr_nota',
  constraints: true // Remova essa linha se as chaves estrangeiras forem obrigatórias
});
NotaEntrada.hasOne(NotaEItem, {
  foreignKey: {
    name: 'serie',
    primaryKey: true
  },
  sourceKey: 'serie',
  constraints: true // Remova essa linha se as chaves estrangeiras forem obrigatórias
});
NotaEntrada.hasOne(NotaEItem, {
  foreignKey: {
    name: 'cd_empresa',
    primaryKey: true
  },
  sourceKey: 'cd_empresa',
  constraints: true // Remova essa linha se as chaves estrangeiras forem obrigatórias
});


module.exports = NotaEItem;
