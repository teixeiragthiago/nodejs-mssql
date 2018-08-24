'use strict'
const _conexao = require('../connection/connection');
const sql = require('mssql');

var proceduresName = {
    BLTC_SelectAutor: 'BLTC_SelectAutor',
    BLTC_SelectAutorByID: 'BLTC_SelectAutorByID',
    BLTC_InsertAutor: 'BLTC_InsertAutor',
    BLTC_AlteraAutor: 'BLTC_AlteraAutor',
    BLTC_DeletaAutor: 'BLTC_DeletaAutor'
}

var procedures = {
    get: () =>{ 
        var request = new sql.Request(_conexao);
        var resultset = 
        request.execute(proceduresName.BLTC_SelectAutor)
       .then(result=>{
           return result.recordset; 
       }).catch(err =>{
           console.log('Erro ' + err);
       });
       return resultset;
       sql.close();
    },
    getById: (IDAutor) => {
        var request = new sql.Request(_conexao);
        var resultset2 = 
        request.input('IDAutor', sql.Int, IDAutor)
        .execute(proceduresName.BLTC_SelectAutorByID)
       .then(result=>{
           return result.recordset; 
       }).catch(err =>{
           console.log('Erro ' + err);
       });
       return resultset2;
       sql.close();
    },
    post: (Nome_Autor, Sobrenome_Autor) => {
      var request = new sql.Request(_conexao);
      request.input('Nome_Autor', sql.VarChar(50), Nome_Autor)
      .input('Sobrenome_Autor', sql.VarChar(60), Sobrenome_Autor)
      .execute(proceduresName.BLTC_InsertAutor)
    },
    put: (IDAutor, NovoNome, NovoSobrenome) => {
        var request = new sql.Request(_conexao);
        request.input('IDAutor', sql.SmallInt, IDAutor)
        .input('NovoNome', sql.VarChar(50), NovoNome)
        .input('NovoSobrenome', sql.VarChar(60), NovoSobrenome)
        .execute(proceduresName.BLTC_AlteraAutor)
    },
    delete: (IDAutor) => {
        var request = new sql.Request(_conexao);
        request.input('ID', sql.SmallInt, IDAutor)
        .execute(proceduresName.BLTC_DeletaAutor)
        sql.close();
    }
}

module.exports = procedures;