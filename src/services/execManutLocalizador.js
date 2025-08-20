const sequelize = require('../db');

async function executarManutLocalizadorResumido(cd_empresa, cd_item, cd_localizador, cor, area) {
  try {
    await sequelize.query(
      `EXEC dbo.espManutLocalizadorResumido :cd_empresa, :cd_item, :cd_localizador, :cor, :area`,
      {
        replacements: { cd_empresa, cd_item , cd_localizador, cor, area },
        type: sequelize.QueryTypes.RAW // ou omite o `type`, que o Sequelize já entende
      }
    );    
  } catch (err) {
    console.error('Erro ao executar a stored procedure:', err);
    throw err;
  }
}

module.exports = executarManutLocalizadorResumido;
