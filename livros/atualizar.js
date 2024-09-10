const {livros} = require('../data');

const atualizarLivro = (req, res) => {
    const {id} = req.params;
    const novoTitulo = req.body.titulo;
    const novoAutor = req.body.autor;
    const novoAno = req.body.ano;
    const novoGenero = req.body.genero;


    const livro = livros.find((b) => b.id == id);

    if (!livro) {
        return res.status(404).send({message: 'Livro não encontrado'});
    }

    livro.titulo = novoTitulo;
    livro.autor = novoAutor;
    livro.ano = novoAno;
    livro.genero = novoGenero;
    
    res.status(200).send({
        message: 'Livro atualizado.',
        livro:livro
    });
}

module.exports = {atualizarLivro}