var _shezhiService = require("../../services/shezhiService.js");
//日期服务
var _dateService = require("../../services/dateService.js");

var that = null;

Page({
  /**
   * 页面的初始数据
   */
  data: {
    selectDate: ""
  },

  search: function (event) {
    _shezhiService.getShezhi(this._where, function (res) {
      that.setData({ res: res })
    })
  },
  //查询条件
  _where: null,
  //查询日期
  _day: "",

  bindDateChange: function (event) {
    this._day = event.detail.value;
    this.setData({ selectDate: event.detail.value });
    var where = { name: this._day };
    this._where=where;
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
    var timestamp = Date.parse(new Date());
    timestamp = new Date(timestamp);
    this._day = _dateService.myGetDate(timestamp);

    var where = { name: this._day };
    this._where = where;
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