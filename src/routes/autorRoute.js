'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/autorController');

router.get('/:id?', controller.get);

module.exports = router;