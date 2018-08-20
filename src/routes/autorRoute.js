'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/autorController');

router.get('/', controller.get);
router.get('/:id', controller.getById);

module.exports = router;