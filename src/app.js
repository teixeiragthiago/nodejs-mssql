'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./connection/connection');
const app = express();
const router = express.Router();

//Carregando as rotas
const autorRoutes = require('./routes/autorRoute');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// const route = router.get('/', (req, res, next) =>{
//     res.status(200).send({
//         title: 'AAAA',
//         version: 'bbbb'
//     })
// });

app.use('/autores', autorRoutes.get);

module.exports = app;