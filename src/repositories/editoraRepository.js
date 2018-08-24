'use strict'

const _conexao = require('../connection/connection');
const sql = require('mssql');

var proceduresName = {
    BLTC_InsereEditora: 'BLTC_InsereEditora',
    BLTC_SelectEditora: 'BLTC_SelectEditora',
    BLTC_SelectEditoraByID: 'BLTC_SelectEditoraByID',
    BLTC_AlteraEditora: 'BLTC_AlteraEditora',
    BLTC_DeletaEditora: 'BLTC_DeletaEditora'    
}

var procedures = {
    get: () => {
        var request = new sql.Request(_conexao);
        var resultset = 
        request.execute(proceduresName.BLTC_SelectEditora)
        .then(result => {
            return result.recordset;
        }).catch(err => {
            console.log('Erro' + err);
        });
        return resultset;
        sql.close();
    },
    getById: (ID) => {
        var request = new sql.Request(_conexao);
        var resultset2 = 
        request.input('ID', sql.SmallInt, ID)
        .execute(proceduresName.BLTC_SelectEditoraByID)
        .then(result => {
            return result.recordset;
        }).catch(err => {
            console.log('Erro' + err);
        })
        return resultset2;
        sql.close();
    },
    post: (NomeEditora) =>{
        var request = new sql.Request(_conexao);
        request.input('Nome', sql.VarChar(50), NomeEditora)
        .execute(proceduresName.BLTC_InsereEditora)
    },
    put: (IDEditora, NovoNome) => {
        var request = new sql.Request(_conexao);
        request.input('ID', sql.SmallInt, IDEditora)
        .input('NovoNome', sql.VarChar(50), NovoNome)
        .execute(proceduresName.BLTC_AlteraEditora)
    },
    delete: (IDEditora) =>{
        var request = new sql.Request(_conexao);
        request.input('ID', sql.SmallInt, IDEditora)
        .execute(proceduresName.BLTC_DeletaEditora)
    }
}

module.exports = procedures;