const estudantes = require('../data');

const listarEstudantes = (req, res) => {
res.status(200).send(estudantes);
};

module.exports = listarEstudantes;