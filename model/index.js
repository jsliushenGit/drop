const mongoose = require('mongoose')
const billSchema = require('../schemas/billSchema')
const typeSCheme = require('../schemas/typeSchema')

const Bill = mongoose.model('bill', billSchema, 'bill')
const Type = mongoose.model('type', typeSCheme, 'type')

module.exports = {
  Bill,
  Type
}