const mongoose = require('mongoose')
const billSchema = require('../schemas/billSchema')

const Bill = mongoose.model('bill', billSchema, 'bill')

module.exports = Bill