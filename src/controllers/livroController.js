'use strict'
const livroRepository = require('../repositories/livroRepositoy');

exports.get = async(req, res, next) => {
    try{
        var response = await livroRepository.get();
        res.status(200).send(response);
    }
    catch(e){
        res.status(500).send({
            message: 'Falha ao processar requisição'
        });
    }
}

exports.getById = async(req, res, next) => {
    try{
        var response = await livroRepository.getById(req.params.id);
        res.status(200).send(response);
    }
    catch(e){
        res.status(500).send({
            message: 'Falha ao processar requisição'
        });
    }
}

exports.post = async(req, res, next) => {
    try{
         await livroRepository.post(
            req.body.Nome_Livro,
            req.body.ISBN,
            req.body.Data_Pub,
            req.body.Preco_Livro,
            req.body.ID_Autor,
            req.body.ID_Editora
        );

        res.status(200).send({
            message: 'Livro cadastrado com sucesso!'
        })
    }catch(e){

    }
}

exports.put = async(req, res, next) => {
    try {
         await livroRepository.put(
            req.params.id,
            req.body.NovoNome,
            req.body.NovoISBN,
            req.body.NovaData,
            req.body.NovoIdAutor,
            req.body.NovoIdEditora
        );

        res.status(200).send({
            message: 'Dados do livro alterados com sucesso!'
        });

    } catch(e) {
        res.status(200).send({
            message: 'Erro ao alterar dados do livro'
        });
    }
}

exports.delete = async(req, res, next) => {
    try {
        await livroRepository.delete(req.params.id);
        res.status(200).send({
            message: 'Livro excluido com sucesso!'
        });
    } catch(e){
        res.status(500).send({
            message: 'Falha ao processar requisição'
        });
    }
}