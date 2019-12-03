const mongoose = require('mongoose')
const Schema = mongoose.Schema

const billSchema = new Schema({
  type: { type: Number, required: true },
  time: { type: Number, required: true },
  detail: String,
  money: { type: Number, required: true },
  insertTime: { type: Number, required: true },
  isExist: { type: Boolean, default: true },
  userId: { type: Number, required: true }
})

module.exports = billSchema