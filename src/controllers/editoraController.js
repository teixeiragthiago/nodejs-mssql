'use strict'
const editoraRepository = require('../repositories/editoraRepository');

exports.get = async(req, res, next) => {
    try {
        var response = await editoraRepository.get();
        res.status(200).send(response);
    }
    catch(e){
        res.status(500).send({
            message: 'Falha ao processar requisição'
        });
        console.log(e);
    }
}

exports.getById = async(req, res, next) => {
    try {
        var response = await editoraRepository.getById(req.params.id);
        res.status(200).send(response);
    }
    catch(e){
        res.status(500).send({
            message: 'Falha ao processar requisição'
        })
    }
}

exports.post = async(req, res, next) => {
    try {

        await editoraRepository.post(
            req.body.NomeEditora
        );
        res.status(201).send({
            message: 'Editora cadastrada com sucesso!'
        });
    } 
    catch (e) {
        res.status(500).send({
            message: 'Erro ao cadastrar editora!'
        });
    }
}

exports.put = async(req, res, next) => {
    try {

        await editoraRepository.put(
            req.params.id,
            req.body.NovoNome
        );
        res.status(201).send({
            message: 'Dados da editora alterados com sucesso!'
        });
    } 
    catch (e) {
        res.status(500).send({
            message: 'Erro ao alterar dados da editora!'
        });
    }
}

exports.delete = async(req, res, next) => {
    try {

        await editoraRepository.delete(
            req.params.id
        );
        res.status(201).send({
            message: 'Editora excluida com sucesso!'
        });
    } 
    catch (e) {
        res.status(500).send({
            message: 'Erro ao excluir editora!'
        });
    }
}
