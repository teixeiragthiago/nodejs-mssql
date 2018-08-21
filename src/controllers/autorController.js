'use strict'
const autorRepository = require('../repositories/autorRepository');

exports.get = async(req, res, next) =>{
    try{
        var response = await autorRepository.get();
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
    try{
        var response = await autorRepository.getById(req.params.id);
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
        await autorRepository.post({
            NomeAutor: req.body.NomeAutor,
            SobrenomeAutor: req.body.SobrenomeAutor
        });
        res.status(201).send({
            message: 'Autor cadastrado com sucesso!'
        });
    } 
    catch(e){
        res.status(500).send({
            message: 'Erro ao cadastrar autor'
        });
    }
}


exports.delete = async(req, res, next) => {
    try{
        await autorRepository.delete(req.params.id);
        res.status(200).send({
            message: 'Autor removido com sucesso!'
        });
    }catch(e){
        res.status(500).send({
            message: 'Falha ao processar requisição'
        });
    }
}


