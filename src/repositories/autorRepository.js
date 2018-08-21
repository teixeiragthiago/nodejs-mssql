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
           sql.close();
       }).catch(err =>{
           console.log('Erro ' + err);
       });
       return resultset2;
    },
    post: (NomeAutor, SobrenomeAutor) => {
      let data = 
      request.input('NomeAutor', sql.VarChar(50), NomeAutor)
      .input('SobrenomeAutor', sql.VarChar(60), SobrenomeAutor)
      .execute(proceduresName.BLTC_InsertAutor)
    },
    put: (req, res) => {
        sql.connect(config, err=>{
            new sql.Request()
            .input("ID", sql.SmallInt, 7)
            .input("NovoNome", sql.VarChar(50), "Adoniram")
            .input("NovoSobrenome", sql.VarChar(60), "Barbosa")
            .execute(proceduresName.BLTC_AlteraAutor, (err, result)=>{
                if(err){
                    console.log('Erro' + err)
                }
                sql.close();
                console.log('Dados do autor alterados com sucesso!');
            });
        });
    },
    delete: (IDAutor) => {
        request.input('ID', sql.SmallInt, IDAutor)
        .execute(proceduresName.BLTC_DeletaAutor)
    }
}

module.exports = procedures;