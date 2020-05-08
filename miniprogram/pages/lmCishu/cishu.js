// miniprogram/pages/lmCishu/cishu.js
var that = null;
//设置服务
var _shezhiService = require("../../services/shezhiService.js");
//弹窗服务
var _alertService = require("../../services/alertService.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cishu : "",
    dangqian : "",
    number:0,
    total:0
  },
  id:"",
  cet4:function(event){
    if(this.data.cishu!="cet4"){
      _shezhiService.updateShezhi(this.id,"cet4");
      that.setData({cishu:"cet4"});
      _shezhiService.chongzhi();
      that.setData({dangqian:"四级词汇"});
      that.setData({ total: 2895 });
    }

    _alertService.showAlert("提示","设置成功","OK");
    that.onShow();
  },
  cet6:function(event){
    if(this.data.cishu!="cet6"){
      _shezhiService.updateShezhi(this.id,"cet6");
      that.setData({cishu:"cet6"});
      _shezhiService.chongzhi();
      that.setData({ dangqian: "六级词汇" });
      that.setData({ total: 2085 });
    }
    _alertService.showAlert("提示", "设置成功", "OK");
    that.onShow();
  },
  chongzhi:function(event){
    _shezhiService.chongzhi();
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    that = this;
    var where = {name : "cishu"};
    _shezhiService.getShezhi(where,function(result){
      that.setData({cishu:result[0].value});
      var id = result[0]._id;
      that.id = id;
      if(that.data.cishu=="cet4"){
        that.setData({dangqian:"四级词汇"});
        that.setData({total:2895});
      }else{
        that.setData({dangqian:"六级词汇"});
        that.setData({ total: 2085 });
      };
    });
    where = {name : "wordOrder"};
    _shezhiService.getShezhi(where,function(result){
      that.setData({number:result[0].value});
    });

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})