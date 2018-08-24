'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./connection/connection');
const app = express();
const router = express.Router();

//Carregando as rotas
const autorRoutes = require('./routes/autorRoute');
const editoraRoutes = require('./routes/editoraRoutes');
const livroRoutes = require('./routes/livrosRoute');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// const route = router.get('/', (req, res, next) =>{
//     res.status(200).send({
//         title: 'AAAA',
//         version: 'bbbb'
//     })
// });

app.use('/autores', autorRoutes);
app.use('/editoras', editoraRoutes);
app.use('/livros', livroRoutes);

module.exports = app;