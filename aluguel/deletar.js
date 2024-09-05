const { alugueis } = require('../data');

const deletar = (req, res) => {
    // Extrai o ID dos parâmetros da URL
    const { id } = req.params;

    // Encontar o aluguel pelo ID
    const index = alugueis.findIndex((b) => b.id == id);

    if ( index === -1) {
        return res.status(404).send('Aluguel não encontrado!');
    }
    // Deleta o aluguel e retorna uma array com o elemento removido
    const aluguelDeletado = alugueis.splice(index, 1)[0];
    res.status(200).send({
        message: 'Aluguel deletado com sucesso!',
        aluguel: aluguelDeletado
    })
}

module.exports = {deletar}