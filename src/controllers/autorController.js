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


