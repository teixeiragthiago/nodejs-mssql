'use strict'

'use strict'

const _conexao = require('../connection/connection');
const sql = require('mssql');

const proceduresName = {
    BLTC_InsertLivros: 'BLTC_InsertLivros',
    BLTC_SelectLivros: 'BLTC_SelectLivros',
    BLTC_SelectLivrosByID: 'BLTC_SelectLivrosByID',
    BLTC_AlterarLivro: 'BLTC_AlterarLivro',
    BLTC_DeletarLivro: 'BLTC_DeletarLivro'
}

const procedures = {
    get: async() =>{
        const request = new sql.Request(_conexao);
        const resultset =
        await request
            .execute(proceduresName.BLTC_SelectLivros)
        return resultset.recordset;
    },
    getById: async(IDLivro) => {
        const request = new sql.Request(_conexao);
        const resultset =
        await request
            .input('ID', sql.SmallInt, IDLivro)
            .execute(proceduresName.BLTC_SelectLivrosByID)
        return resultset.recordset;
    },
    post: async(
        NomeLivro,
        ISBN,
        DataPub,
        PrecoLivro,
        IDAutor,
        IDEditora
    ) => {
        const request = new sql.Request(_conexao);
        await request
            .input('NomeLivro', sql.VarChar(50), NomeLivro)
            .input('ISBN', sql.VarChar(30), ISBN)
            .input('DataPub', sql.VarChar(30), DataPub)
            .input('PrecoLivro', sql.Money, PrecoLivro)
            .input('IDAutor', sql.SmallInt, IDAutor)
            .input('IDEditora', sql.SmallInt, IDEditora)
            .execute(proceduresName.BLTC_InsertLivros)
    },
    put: async(
        ID,
        NovoNome,
        NovoISBN,
        NovaData,
        NovoIdAutor,
        NovoIdEditora
    ) => {
        const request = new sql.Request(_conexao);
        await request
            .input('ID', sql.SmallInt, ID)
            .input('NovoNome', sql.VarChar(50), NovoNome)
            .input('NovoISBN', sql.VarChar(30), NovoISBN)
            .input('NovaData', sql.VarChar(30), NovaData)
            .input('NovoIdAutor', sql.SmallInt, NovoIdAutor)
            .input('NovoIdEditora', sql.SmallInt, NovoIdEditora)
            .execute(proceduresName.BLTC_AlterarLivro)
    },
    delete: async(IDLivro) => {
        const request = new sql.Request(_conexao);
        await request
            .input('ID', sql.SmallInt, IDLivro)
            .execute(proceduresName.BLTC_DeletarLivro)
    }
}

module.exports = procedures;
