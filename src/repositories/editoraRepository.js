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
    get: async() => {
        const request = new sql.Request(_conexao);
        const resultset = await request.execute(proceduresName.BLTC_SelectEditora)
        return resultset.recordset;
    },
    getById: async(ID) => {
        const request = new sql.Request(_conexao);
        const resultset = 
        await request
            .input('ID', sql.SmallInt, ID)
            .execute(proceduresName.BLTC_SelectEditoraByID)
        return resultset.recordset;
    },
    post: async(NomeEditora) =>{
        const request = new sql.Request(_conexao);
        await request
            .input('Nome', sql.VarChar(50), NomeEditora)
            .execute(proceduresName.BLTC_InsereEditora)
    },
    put: async(IDEditora, NovoNome) => {
        const request = new sql.Request(_conexao);
        await request
            .input('ID', sql.SmallInt, IDEditora)
            .input('NovoNome', sql.VarChar(50), NovoNome)
            .execute(proceduresName.BLTC_AlteraEditora)
    },
    delete: async(IDEditora) =>{
        const request = new sql.Request(_conexao);
        await request
            .input('ID', sql.SmallInt, IDEditora)
            .execute(proceduresName.BLTC_DeletaEditora)
    }
}

module.exports = procedures;