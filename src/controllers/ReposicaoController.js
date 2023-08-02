const ModelReposicao = require('../models/reposicao');

module.exports = 
{
    async GetOne(req, res) {
        try {
          const { cd_item, cd_empresa } = req.body;
      
          const repo = await ModelReposicao.findOne({
            where: {
              cd_item: cd_item,
              cd_empresa: cd_empresa
            }
          });
      
          return res.json(repo);
        } catch (error) {
          return res.status(500).json({ error: "A consulta espera o codigo do item e a empresa!" });
        }
    },
    
    async Create(req,res){
        try {
            const reposicao = await ModelReposicao.create(      
                {
                    cd_empresa         : req.body.cd_empresa,
                    cd_item            : req.body.cd_item,
                    cd_usuario         : req.body.cd_usuario,
                    dt_reposicao       : req.body.dt_reposicao,
                    LocalConfirmado    : req.body.LocalConfirmado,
                    qt_confirmada      : req.body.qt_confirmada,
                    confirmado_estoque : req.body.confirmado_estoque,
                    LocalExcesso       : ""
                }
            );
            return res.json(reposicao);

        } catch (erro) {
            return res.status(500).json({ error: "Erro de Primary Key!" });
        }
    },    

}

/*
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
    },  */  