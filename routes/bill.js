var express = require('express');
var router = express.Router();
const Bill = require('../model/Bill')

router.get('/list', async (req, res, next) => {
  let params = {
    isExist: true
  }
  req.query.type && (params.type = req.query.type)
  try {
    const data = await Bill.find(params)
    res.send({
      code: 200,
      data: data
    })
  } catch (error) {
    res.send({
      code: -1,
      msg: error
    })
  }
});

router.post('/save', async (req, res, next) => {
  try {
    if (!req.body.type) throw '缺少参数type'
    if (!req.body.time) throw '缺少参数time'
    if (!req.body.money) throw '缺少参数money'

    let { type, time, money, detail } = req.body

    let bill = {
      type,
      time,
      money,
      detail,
      insertTime: Date.now()
    }
    const result = await Bill.create(bill)
    res.send({
      code: 200,
      data: result
    })
  } catch (error) {
    res.send({
      code: -1,
      msg: error
    })
  }
});

router.post('/delete', async (req, res, next) => {
  try {
    let params = {
      _id: req.body.id
    }

    const result = await Bill.updateOne(params, { isExist: false })

    res.send({
      code: 200,
      data: result.nModified === 1 ? '删除成功' : '删除失败'
    })
  } catch (error) {
    res.send({
      code: -1,
      msg: error
    })
  }
});

router.post('/edit', async (req, res, next) => {
  try {
    if (!req.body.type) throw '缺少参数type'
    if (!req.body.time) throw '缺少参数time'
    if (!req.body.money) throw '缺少参数money'

    let { type, time, money, detail, id } = req.body

    let bill = {
      type,
      time,
      money,
      detail,
      insertTime: Date.now()
    }

    const result = await Bill.updateOne({_id: id}, bill)

    console.log(result)

    res.send({
      code: 200,
      data: result.nModified === 1 ? '编辑成功' : '编辑失败'
    })
  } catch (error) {
    res.send({
      code: -1,
      msg: error
    })
  }
});

module.exports = router;
