// Importa o modulo de dados
const {alugueis} = require('../data');

function alugar(req, res) {
    console.log(req.body);
    //  Cria um novo aluguel
    const novoAluguel = {
        id: alugueis.length + 1,
        idLivro: req.body.idLivro,
        idEstudante: req.body.idEstudante,
        dataAluguel: req.body.dataAluguel
    }
    // Adiciona o novo aluguel ao array
    alugueis.push(novoAluguel)
    // Envia uma resposta ao cliente, (201) = Created 
    res
    .status(201)
    .send({message: 'Aluguel cadastrado com sucesso!', aluguel: novoAluguel});
}

module.exports = {alugar};