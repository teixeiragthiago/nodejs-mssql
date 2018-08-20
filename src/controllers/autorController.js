'use strict'
const autorRepository = require('../repositories/autorRepository');

var controllers = {
    get: (req, res) => {
        autorRepository.get();
    }
}

module.exports = controllers;
