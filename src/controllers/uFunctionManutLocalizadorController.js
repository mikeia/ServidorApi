const executarManutLocalizador = require('../services/execManutLocalizador');

module.exports = {
  async Create(req, res) {
    try {
      const { cd_empresa, cd_item, cd_localizador, cor, area } = req.body;

      await executarManutLocalizador(cd_empresa, cd_item, cd_localizador, cor, area);

      return res.status(204).send(); // 204 = sucesso, sem conteúdo
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error.message });
    }
  },
};
