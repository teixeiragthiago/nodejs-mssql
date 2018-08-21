'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/autorController');

router.get('/', controller.get);
router.get('/:ID_Autor', controller.getById);

module.exports = router;