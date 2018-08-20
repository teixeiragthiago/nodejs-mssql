'use strict'
const config = require('../connection/connection');
const sql = require('mssql');

var procedures = {
    get: (req, res) =>{ 
        sql.connect(config, err=> {
            new sql.Request()
            .input('IDAutor', sql.Int)
            .execute('BLTC_SelectAutor', (err, result) => {
                if(err){
                    console.log('Erro' + err)
                }
                return result.recordset;
            })
        });
    },
    post: (req, res) => {

    }
}

procedures.get();

module.exports = procedures;


