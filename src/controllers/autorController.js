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
        var data = {
            Nome_Autor: req.body.Nome_Autor,
            Sobrenome_Autor: req.body.Sobrenome_Autor
        }

        await autorRepository.post(data);
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

exports.put = async(req, res, next) => {
    try{
        var data = {
            ID: req.body.ID,
            NovoNome: req.body.NovoNome,
            NovoSobrenome: req.body.NovoSobrenome
        }

        await autorRepository.put(data);
        res.status(201).send({
            message: 'Dados do autor alterados com sucesso!'
        });
        console.log(data);
    }
    catch(e){
        res.status(500).send({
            message: 'Erro ao alterar dados do autor'
        })
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


