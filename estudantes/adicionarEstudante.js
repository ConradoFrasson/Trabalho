const estudantes = require('../data');

function criarEstudante(req, res) {
    console.log(req.body);
    const novoEstudante = {
        id: estudantes.length + 1,
        nome: req.body.nome,
        matricula: req.body.matricula,
        curso: req.body.curso,
        ano: req.body.ano
    };
    estudantes.push(novoEstudante)
    res
        .status(201)
        .send({ message: 'Baralho criado com sucesso!', estudante: novoEstudante });
}

module.exports = {criarEstudante}