const NotaEntrada = require('../models/notaEntrada');
const NotaEItem = require('../models/notaEItem');
const sequelize = require('sequelize');
  
  module.exports = {
    async PostOne(req, res) {
      
    const { cd_empresa, cd_item  } = req.body;
    try {
    const result = await NotaEntrada.findAll({
      attributes: [
        'dt_lancamento',
        [sequelize.fn('SUM', sequelize.literal('ISNULL(qt_entrada, 0)')), 'qt_entrada'],
        // [sequelize.fn('TOP',sequelize.literal('1'))]
      ],
      include: [
        {
          model: NotaEItem,
          required: true,
          attributes: [],          
          where: sequelize.literal(`NotaEItem.nr_nota  = NotaEntrada.nr_nota AND NotaEItem.cd_cadastro  = NotaEntrada.cd_cadastro AND NotaEItem.serie = NotaEntrada.serie  AND NotaEntrada.cd_empresa = NotaEItem.cd_empresa AND NotaEItem.cd_item = '${cd_item}'`),
          //where: sequelize.literal(`NotaEItem.cd_empresa = NotaEntrada.cd_empresa AND NotaEItem.cd_item = '${cd_item}' AND NotaEItem.serie = NotaEntrada.serie AND NotaEItem.cd_cadastro  = NotaEntrada.cd_cadastro AND NotaEntrada.cd_empresa = '${cd_empresa}'`),
        },
      ],
     
      where: sequelize.literal(`NotaEntrada.cd_empresa = '${cd_empresa}'`),
      group: ['dt_lancamento'],
      order: [['dt_lancamento', 'DESC']],
      //order: [[sequelize.literal('dt_lancamento DESC, cd_empresa')]],    
    });   

    res.json(result[0].dataValues);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
};



// const { sequelize, Sequelize } = require('../db');
// const NotaEntrada = require('../models/notaEntrada');
// const NotaEItem = require('../models/notaEItem')




// module.exports = {
//   async PostOne(req, res) {
    
//     const { cd_item, cd_empresa } = req.body;
//     //const serie = NotaEntrada.sequelize.col('serie')

//     try {
      

//       const result = await NotaEntrada.sum('ISNULL(NotaEItem.qt_entrada, 0)', {
      
//         include: [
//           {
//             model: NotaEItem,          
//             required: true,
//             attributes: ['dt_lancamento'],
     
//           },
//         ],
//         where: sequelize.literal(`NotaEItem.cd_empresa   = NotaEntrada.cd_empresa 
//                               AND NotaEItem.cd_item      = '${cd_item} 
//                               AND NotaEItem.serie        = NotaEntrada.serie  
//                               AND NotaEItem.nr_nota      = NotaEntrada.nr_nota
//                               AND NotaEItem.cd_cadastro  = NotaEntrada.cd_cadastro
//                               AND NotaEntrada.cd_empresa = '${cd_empresa}'`),
//         group: ['dt_lancamento'],
//         order: [['dt_lancamento', 'DESC']],
//       });

//       const saldo = result.length > 0 ? result[0].notaEItems[0].qt_entrada : 0;
//       console.log(saldo);
//       return res.json({ saldo: saldo });
//     } catch (error) {
//       console.log(error);
//       return res.status(500).json({
//         error: 'A consulta espera o código do item e a empresa!',
//       });
//     }
//   },
// };
