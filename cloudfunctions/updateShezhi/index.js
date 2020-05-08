// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  try {
    return await db.collection('shezhi').where({
      name:event.name
    })
      .update({
        data: {
          value:event.value
        },
      })
  } catch (e) {
    console.error(e)
  }
}