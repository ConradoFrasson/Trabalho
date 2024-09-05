const { alugueis } = require('../data');

const listar = (req, res) => {
    res.status(200).send(alugueis);
}

module.exports = {listar};