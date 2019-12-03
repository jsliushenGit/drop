var express = require('express');
var router = express.Router();
const { Type } = require('../model/index')

router.get('/list', async (req, res, next) => {
  let params = {
    isExist: true
  }
  req.query.type && (params.type = req.query.type)
  try {
    const data = await Type.find(params)
    let resultData = data.map(item => {
      return {
        label: item.typeName,
        value: item.value
      }
    })
    res.send({
      code: 200,
      data: resultData
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
    if (!req.body.typeName) throw '缺少参数typeName'

    let { typeName } = req.body

    let type = {
      typeName
    }
    const result = await Type.create(type)
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

    const result = await Type.updateOne(params, { isExist: false })

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
    if (!req.body.typeName) throw '缺少参数typeName'

    let { typeName, id } = req.body

    let type = {
      typeName
    }

    const result = await Type.updateOne({_id: id}, type)

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
