'use strict'

'use strict'

const _conexao = require('../connection/connection');
const sql = require('mssql');

var proceduresName = {
    BLTC_InsertLivros: 'BLTC_InsertLivros',
    BLTC_SelectLivros: 'BLTC_SelectLivros',
    BLTC_SelectLivrosByID: 'BLTC_SelectLivrosByID',
    BLTC_AlterarLivro: 'BLTC_AlterarLivro',
    BLTC_DeletarLivro: 'BLTC_DeletarLivro'    
}

var procedures = {
    get: () =>{
        var request = new sql.Request(_conexao);
        var resultset = 
        request.execute(proceduresName.BLTC_SelectLivros)
        .then(result => {
            return result.recordset;
        }).catch(err => {
            console.log('Erro' + err);
        });
        return resultset;
        sql.close();
    },
    getById: (IDLivro) => {
        var request = new sql.Request(_conexao);
        var resultset =
        request.input('ID', sql.SmallInt, IDLivro) 
        .execute(proceduresName.BLTC_SelectLivrosByID)
        .then(result => {
            return result.recordset;
        }).catch(err => {
            console.log('Erro' + err);
        });
        return resultset;
        sql.close();
    },
    post: (
        NomeLivro,
        ISBN,
        DataPub,
        PrecoLivro,
        IDAutor,
        IDEditora
    ) => {
        var request = new sql.Request(_conexao);
        request.input('NomeLivro', sql.VarChar(50), NomeLivro)
        .input('ISBN', sql.VarChar(30), ISBN)
        .input('DataPub', sql.VarChar(30), DataPub)
        .input('PrecoLivro', sql.Money, PrecoLivro)
        .input('IDAutor', sql.SmallInt, IDAutor)
        .input('IDEditora', sql.SmallInt, IDEditora)
        .execute(proceduresName.BLTC_InsertLivros)
    },
    put: (
        ID,
        NovoNome,
        NovoISBN,
        NovaData,
        NovoIdAutor,
        NovoIdEditora
    ) => {
        var request = new sql.Request(_conexao);
        request.input('ID', sql.SmallInt, ID)
        .input('NovoNome', sql.VarChar(50), NovoNome)
        .input('NovoISBN', sql.VarChar(30), NovoISBN)
        .input('NovaData', sql.VarChar(30), NovaData)
        .input('NovoIdAutor', sql.SmallInt, NovoIdAutor)
        .input('NovoIdEditora', sql.SmallInt, NovoIdEditora)
        .execute(proceduresName.BLTC_AlterarLivro)
    },
    delete: (IDLivro) => {
        var request = new sql.Request(_conexao);
        request.input('ID', sql.SmallInt, IDLivro)
        .execute(proceduresName.BLTC_DeletarLivro)
    }
}

module.exports = procedures;
