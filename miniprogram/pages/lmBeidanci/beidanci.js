// miniprogram/pages/lmBeidanci/beidanci.js
var that = null;
//导航服务
var _contentNavigationService = require("../../services/contentNavigationService.js");
//
var _shezhiService = require("../../services/shezhiService.js");
//日期服务
var _dateService = require("../../services/dateService.js");

var _cet4 = require("../../wordsData/cet4.js");

var _cet6 = require("../../wordsData/cet6.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  //导航到背词页面，完成背词初始化
  kaishibeici: function(event){
    var today = Date.now();
    today = _dateService.myGetDate(new Date(today));
    var where = { name: today };
    _shezhiService.chushihuaShezhi(where, function (total) {
      if(total==0){
        _shezhiService.insertShezhi(today,0,function(result){});
      }
    });
    _contentNavigationService.navigateToAsync(_contentNavigationService.beiciPage);
  },
  xuanzecishu :function(event){
    _contentNavigationService.navigateToAsync(_contentNavigationService.cishuPage);
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
    that=this;
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