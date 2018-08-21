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
var request = new sql.Request(_conexao);

var procedures = {
    get: () =>{ 
        var resultset = 
        request.execute(proceduresName.BLTC_SelectAutor)
       .then(result=>{
           return result.recordset; 
       }).catch(err =>{
           console.log('Erro ' + err);
       });
       return resultset;
    },
    getById: (IDAutor) => {
        var resultset2 = 
        request.input('IDAutor', sql.SmallInt, IDAutor)
        .execute(proceduresName.BLTC_SelectAutorByID)
       .then(result=>{
           return result.recordset; 
       }).catch(err =>{
           console.log('Erro ' + err);
       });
       return resultset2;
    },
    post: (Nome_Autor, Sobrenome_Autor) => {
      request.input('Nome_Autor', sql.VarChar(50), Nome_Autor)
      .input('Sobrenome_Autor', sql.VarChar(60), Sobrenome_Autor)
      .execute(proceduresName.BLTC_InsertAutor)
    },
    put: (ID, NovoNome, NovoSobrenome) => {
        request.input('ID', sql.SmallInt, ID)
        .input('NovoNome', sql.VarChar(50), NovoNome)
        .input('NovoSobrenome', sql.VarChar(60), NovoSobrenome)
        .execute(proceduresName.BLTC_AlteraAutor)
    },
    delete: (IDAutor) => {
        request.input('ID', sql.SmallInt, IDAutor)
        .execute(proceduresName.BLTC_DeletaAutor)
    }
}

module.exports = procedures;