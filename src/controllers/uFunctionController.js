const { Sequelize } = require("sequelize");
const sequelize = require("../db");
const ModelPesIteAvaLookUp = require('../models/spcPesIteAvaLookUp');



async function executeStoredProcedure(cd_usuario, cd_empresa, pesquisa, whereEx) {
  const query = `
    EXEC spcPesIteAvaLookUp ${cd_usuario},${cd_empresa},'${pesquisa}',${whereEx}
  `;

  console.log("Query1:", query);

  const [results] = await sequelize.query(query, {
    type: Sequelize.QueryTypes.exec,
  });

  console.log("Results:", results);
  return results;
}

module.exports = {
    async Post(req, res) {
      try {
        const { cdusuario, cdempresa, descpesquisa, descwhereEx } = req.body;
  
        if (!cdusuario || !cdempresa || !descpesquisa) {
          return res.status(400).json({ error: "Parâmetros incompletos!" });
        }
  
        const result = await executeStoredProcedure(cdusuario, cdempresa, descpesquisa, descwhereEx);
        return res.json(result);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
    },
  };
