const express = require('express')
const calController = require('./calc.controller')

calcRouter = express.Router();
calcRouter.post('/', calController.calculate);

module.exports = calcRouter
