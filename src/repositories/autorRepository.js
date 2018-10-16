'use strict'
const _conexao = require('../connection/connection');
const sql = require('mssql');

const proceduresName = {
    BLTC_SelectAutor: 'BLTC_SelectAutor',
    BLTC_SelectAutorByID: 'BLTC_SelectAutorByID',
    BLTC_InsertAutor: 'BLTC_InsertAutor',
    BLTC_AlteraAutor: 'BLTC_AlteraAutor',
    BLTC_DeletaAutor: 'BLTC_DeletaAutor'
}

const procedures = {
    get: async() =>{
        const request = new sql.Request(_conexao);
        const resultset = await request.execute(proceduresName.BLTC_SelectAutor)
        return resultset.recordset;

    },
    getById:  async(IDAutor) => {
        const request = new sql.Request(_conexao);
        const resultset = await request
            .input('IDAutor', sql.SmallInt, IDAutor)
            .execute(proceduresName.BLTC_SelectAutorByID);
        return resultset.recordset;
    },
    post: async(Nome_Autor, Sobrenome_Autor) => {
         const request = new sql.Request(_conexao);
         await request
            .input('Nome_Autor', sql.VarChar(50), Nome_Autor)
            .input('Sobrenome_Autor', sql.VarChar(60), Sobrenome_Autor)
            .execute(proceduresName.BLTC_InsertAutor)
    },
    put: async(IDAutor, NovoNome, NovoSobrenome) => {
        const request = new sql.Request(_conexao);
        await request
            .input('IDAutor', sql.SmallInt, IDAutor)
            .input('NovoNome', sql.VarChar(50), NovoNome)
            .input('NovoSobrenome', sql.VarChar(60), NovoSobrenome)
            .execute(proceduresName.BLTC_AlteraAutor)
    },
    delete: async(IDAutor) => {
        const request = new sql.Request(_conexao);
        await request
            .input('ID', sql.SmallInt, IDAutor)
            .execute(proceduresName.BLTC_DeletaAutor)
    }
}

module.exports = procedures;