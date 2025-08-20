 const ModelLocalizadorItem = require('../models/localizadorItem');

module.exports =
{
    async PostOne(req, res) {
        try {
            const { cd_empresa, cd_item } = req.body;

            const repo = await ModelLocalizadorItem.findOne({
                where: {
                    cd_empresa: cd_empresa,
                    cd_item: cd_item
                }
            });

            return res.json(repo);
        } catch (error) {
            return res.status(500).json({ error: "A consulta espera o codigo do item e a empresa!" });
        }
    }
}
 /*
   async Create(req,res){
       try {
           const reposicao = await ModelReposicao.create(      
               {
                   cd_empresa : req.body.cd_empresa,
                   cd_item : req.body.cd_item,
                   cd_usuario : req.body.cd_usuario,
                   LocalConfirmado : req.body.LocalConfirmado,
                   qt_confirmada : req.body.qt_confirmada,
                   confirmado_estoque : "S",
                   LocalExcesso : ""
               }
           );
           return res.json(reposicao);

       } catch (erro) {
           return res.status(500).json({ error: "Erro de Primary Key!" });
       }
   },    

}


   async List(req,res){
       try {
           const reposicao = await ModelReposicao.findAll();

           return res.json(reposicao);

       } catch (erro) {
        return console.error("Erro na List:",erro);   
       }
       
   },

   async Update(req,res){
       try {

           const repo = await ModelReposicao.findByPk(req.body.codigo);
           if(repo){
               repo.qt_confirmada = req.body.qt_confirmada;
               await repo.save();
           }

           return res.json(repo);

       } catch (erro) {
        return console.error("Erro na Update:",erro);  
       }
   },  
  
   async Delete(req,res){
       try {

           const req = await ModelReposicao.findByPk(req.body.codigo);
           await req.destroy();    
           return res.json(req);

       } catch (erro) {
        return console.error("Erro na Delete:",erro);   
       }
   },  
   
   //EXEC STORED PROCEDURE
   const ModelLocalizadorItem = require('../models/localizadorItem');
//const { Sequelize } = require('sequelize');

// Função para executar a stored procedure
async function executeStoredProcedure(cd_usuario, cd_empresa, pesquisa, whereEx) {
  const query = `EXEC spcPesIteAvaLookUp @cd_usuario = ${cd_usuario}, @cd_empresa = ${cd_empresa}, @pesquisa = '${pesquisa}', @whereEx = '${whereEx}'`;
  const result = await sequelize.query(query, {
    type: Sequelize.QueryTypes.RAW,
  });

  return result;
}

// Exemplo de execução da stored procedure
(async () => {
  const cd_usuario = cd_usuario; // Preencha com o valor correto
  const cd_empresa = cd_empresa; // Preencha com o valor correto
  const pesquisa = pesquisa; // Preencha com o valor correto
  const whereEx = null; // Preencha com o valor correto

  try {
    const storedProcedureResult = await executeStoredProcedure(cd_usuario, cd_empresa, pesquisa, whereEx);
    console.log(storedProcedureResult);
  } catch (error) {
    console.error(error);
  } finally {
    sequelize.close(); // Feche a conexão com o banco de dados ao final
  }
})();
   
   
   */