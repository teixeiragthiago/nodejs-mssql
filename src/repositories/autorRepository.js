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
        let resultset = 
        request.execute(proceduresName.BLTC_SelectAutor)
       .then(result=>{
           return result.recordset; 
       }).catch(e =>{
           console.log(e);
       });
       return resultset;
    },
    getById: (id) => {
      let resultset = 
      request.input('IDAutor', sql.SmallInt, id)
      request.execute(proceduresName.BLTC_SelectAutorByID)
      .then(result=> {
          return result.recordset
      }).catch(e => {
          console.log(e);
      })
      return resultset;
    },
    post: (req, res) => {
        sql.connect(config, err=>{
            new sql.Request()
            .input("NomeAutor", sql.VarChar(50), req.params.nome)
            .input("SobrenomeAutor", sql.VarChar(60), req.params.sobrenome)
            .execute(proceduresName.BLTC_InsertAutor, (err, result) =>{
                if(err){
                    console.log('Erro' + err)
                }
                sql.close();
                console.log('Autor inserido com sucesso!');
            });
        });
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
    delete: (req, res) => {
        sql.connect(config, err => {
            new sql.Request()
            .input("ID", sql.SmallInt)
            .execute(proceduresName.BLTC_DeletaAutor, (err, result) => {
                if(err){
                    console.log('Erro' + err);
                }
                sql.close();
                console.log('Autor removido com sucesso!');
            });
        });
    }
}

// get: () =>{ 
//     sql.connect(config, err=> {
//         new sql.Request()
//         .execute(proceduresName.BLTC_SelectAutor, (err, result) => {
//             if(err){
//                 console.log('Erro' + err)
//             }
//             sql.close();
//             return result;
//         });
//     });
// },

module.exports = procedures;