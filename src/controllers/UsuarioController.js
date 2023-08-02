const espROLogin = require('../models/espROLogin');
const ModelUsuario = require('../models/usuario');
const sequelize = require('sequelize');

module.exports = {
  async PostOne(req, res) {
    try {
      const { userLogin} = req.body;

      const user = await ModelUsuario.findAll({
        attributes: ['cd_usuario', 'nome', 'login', 'cd_empresa'],           
        include: [
          {
            model: espROLogin,
            attributes: ['reposicao'],
            required: true,            
          },
        ],
        where: sequelize.literal(`usuario.cd_usuario = espROLogin.cd_usuario AND usuario.login = '${userLogin}'`),
     
      });

      return res.json(user);
    } catch (erro) {
      console.error("Erro na PostOne:", erro);
      return res.status(500).json({ error: 'Ocorreu um erro ao processar a solicitação.' });
    }
  },
};
