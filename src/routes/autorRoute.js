'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/autorController');

router.get('/', controller.get);
router.get('/:id', controller.getById);
router.delete('/:id', controller.delete);
router.post('/', controller.post);
router.put('/', controller.put);

module.exports = router;