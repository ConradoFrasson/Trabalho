const {livros} = require('../data');

function adicionarLivro(req, res) {
    console.log(req.body);
    const novoLivro = {
        id: livros.length + 1,
        titulo: req.body.titulo,
        autor: req.body.autor,
        ano: req.body.ano,
        genero: req.body.genero
    };
    livros.push(novoLivro)
    res
    .status(201)
    .send({message: 'Livro adicionado com sucesso!', Livro: novoLivro});
}

module.exports = {adicionarLivro}