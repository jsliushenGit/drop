const mongoose = require('mongoose')
const config = require('./config')

module.exports = () => {
  mongoose.connect(config.mongodb)
  const db = mongoose.connection
  db.on('error', console.error.bind(console, 'MongoDB 连接错误：'))
  db.once('open', (cb) => {
    console.log('链接成功')
  })
  return db
}
