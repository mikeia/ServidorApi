const ModelTransest = require('../models/transest');

module.exports = {
  async PostOne(req, res) {
    try {
      const { cd_empresa, cd_item, cd_deposito } = req.body;

      const entradas = await ModelTransest.sum('qt_entrada', {
        where: {
          cd_empresa: cd_empresa,
          cd_item: cd_item,
          cd_deposito: [1, 2]
        }
      });

      const saidas = await ModelTransest.sum('qt_saida', {
        where: {
          cd_empresa: cd_empresa,
          cd_item: cd_item,
          cd_deposito:[1, 2]
        }
      });

      const saldo = entradas - saidas;

      return res.json({ saldo: saldo });
    } catch (error) {
      return res.status(500).json({ error: "A consulta espera o código do item e a empresa!" });
    }
  }
}
