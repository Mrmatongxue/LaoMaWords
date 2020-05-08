//
var webService = {
  _alertService: require("../services/alertService.js"),
  _md5:require("md5.js"),
  searchWord:function(word,callback){
    var add = "https://fanyi-api.baidu.com/api/trans/vip/translate";
    var q = word;
    var appid = "20200304000392398";
    var key = "2Rxa6WzCysoUb38ekzTA";
    var salt = parseInt(Math.random()*10000);
    var s = appid + q + salt + key;
    var sign = this._md5.hexMD5(s);
    wx.request({
      url: add,
      data:{
        q:q,
        from:"en",
        to:"zh",
        appid:appid,
        salt:salt,
        sign:sign
      },
      method:"GET",
      success:function(result){
        callback(result.data.trans_result);
      },
      fail:function(result){
        this._alertService("错误","网络连接错误","确定");
      }
    })
  }
}
module.exports = webService;