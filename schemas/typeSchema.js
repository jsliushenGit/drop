const mongoose = require('mongoose')
const Schema = mongoose.Schema

const typeSchema = new Schema({
  typeName: { type: String, required: true },
  value: { type: Number, required: true },
  isExist: { type: Boolean, default: true }
})

module.exports = typeSchema