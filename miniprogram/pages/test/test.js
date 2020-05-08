// miniprogram/pages/test/test.js

//页面导航服务
var _contentNavigationService = require("../../services/contentNavigationService.js");

var _shezhiService = require("../../services/shezhiService.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  shezhiButton: function () {
    _contentNavigationService.navigateToAsync(_contentNavigationService.shezhiPage);
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
    _shezhiService.insertShezhi("wordNumber",10,function(){
      console.log("默认一次读取单词量设置成功！");
    })

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