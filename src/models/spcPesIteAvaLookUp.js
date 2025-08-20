const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db');


const PesIteAvaLookUp = sequelize.define("PesIteAvaLookUp", {
  // Defina os campos que deseja recuperar da stored procedure
  // Aqui, você pode usar DataTypes correspondentes aos tipos de dados retornados
  // Exemplo:
  cd_item :{
    type: Sequelize.STRING,
    allowNull: true,
  },
  Item :{
    type: Sequelize.STRING,
    allowNull: true,
  },
  Fabricante :{
    type: Sequelize.STRING,
    allowNull: true,
  },
  Marca :{
    type: Sequelize.STRING,
    allowNull: true,
  },
  Descricao :{
    type: Sequelize.STRING,
    allowNull: true,
  },
  Estoque :{
    type: Sequelize.DECIMAL,
    allowNull: true,
  },
  Localizador :{
    type: Sequelize.STRING,
    allowNull: true,
  }
});

module.exports = PesIteAvaLookUp;