//app.js
//设置服务
var _shezhiService = require("services/shezhiService.js");
App({
  onLaunch: function () {
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        // env: 'my-env-id',
        traceUser: true,
      })
    }
    var chushihua = 0;
    var where = { name: "chushihua" };
    _shezhiService.chushihuaShezhi(where, function (total) {
      chushihua = total;
      if (chushihua == 0) {
        _shezhiService.insertShezhi("chushihua", true, function (result) {
          console.log("初始化成功！");
        });
        _shezhiService.insertShezhi("wordNumber",10,function(result){
          console.log("默认一次单词量设置成功！");
        });
        _shezhiService.insertShezhi("cishu", "cet4", function (result) {
          console.log("默认词书设置成功！");
        });
        _shezhiService.insertShezhi("wordOrder",0,function(result){
          console.log("默认单词序号设置成功！");
        });
      }
    });

    this.globalData = {}
  }
})
