// miniprogram/pages/lmShezhi/shezhi.js
//设置服务
var _shezhiService = require("../../services/shezhiService.js");
//弹窗服务
var _alertService = require("../../services/alertService.js");
var that=null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wordNumber:0
  },

  wordNumberName:"wordNumber",
  wordNumberWhere:null,
  _update:null,
  
  //得到输入的单词数量
  wordNumberInput:function(event){
    this.setData({wordNumber:event.detail.value});
  },
  //得到已经设置的单词数量
  getWordNumber:function(){
    _shezhiService.getShezhi(this.wordNumberWhere,function(result){
      that.setData({wordNumber:result[0].value});
    })
  },
  //单词数量设置
  wordNumberButton:function(event){
    _shezhiService.getShezhi(this.wordNumberWhere,function(result){
      var id=result[0]._id;
      console.log(that.data.wordNumber);
      _shezhiService.updateShezhi(id, that.data.wordNumber);
    });
    _alertService.showAlert("尊敬的用户","设置已完成","OK");
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
    var where = { name: this.wordNumberName };
    this.wordNumberWhere = where;
    this.getWordNumber();
    this._update=this.data.wordNumber;
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