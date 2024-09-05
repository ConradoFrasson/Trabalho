const estudantes = require('../data');

function criarEstudante(req, res) {
console.log(req.body);
const novoEstudante = {
id: estudantes.length + 1,
nome: req.body.titulo,
matricula: req.body.matricula,
curso: req.body.curso,
ano: req.body.curso
};
estudantes.push(novoEstudante)
res
.status(201)
.send({message: 'Baralho criado com sucesso!', estudantes: novoEstudante});
}

module.exports = criarEstudante