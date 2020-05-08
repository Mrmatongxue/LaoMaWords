// miniprogram/pages/lmBeici/beici.js
var that = null;

var _shezhiService = require("../../services/shezhiService.js");

var _alertService = require("../../services/alertService.js");

var _collectionService = require("../../services/collectionService.js");

var _cet4 = require("../../wordsData/cet4.js");

var _cet6 = require("../../wordsData/cet6.js");

var _webService = require("../../services/webService.js");
//导航服务
var _contentNavigationService = require("../../services/contentNavigationService.js");

var _dateService = require("../../services/dateService.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    word: "",
    translist: [],
    shoucang: "收藏"
  },
  wordNumber: 0,
  wordOrder: 0,
  order: 0,
  woid: "",
  today: "",
  dateid: "",
  beiguo: function(event) {
    this.order += 1;
    _shezhiService.updateShezhi(this.woid, this.wordOrder + this.order);
    _shezhiService.incNumber(this.dateid);
    if (this.order == (this.wordNumber - 1)) {
      _alertService.showAlert("加油", "你已经背完一组单词，再接再厉！", "知道了");
      _dateService.sleep(2000);
      _contentNavigationService.back();
    } else {
      //显示下一个单词

      this.setData({
        word: _cet4.wordList[this.wordOrder + this.order]
      });
      _webService.searchWord(this.data.word, function(result) {
        that.setData({
          translist: result
        });
      });
      _collectionService.isCollected({word:this.data.word},function(result){
        if(result==0){
          that.setData({shoucang:"收藏"});
        }else{
          that.setData({shoucang:"取消收藏"})
        }
      })
    }
  },
  fanhui: function(event) {
    _dateService.sleep(2000);
    _contentNavigationService.back();
  },
  //收藏
  shoucang: function(event) {
    if (this.data.shoucang == "收藏") {
      _collectionService.insert(this.data.word, this.data.translist[0].dst);
      this.setData({shoucang:"取消收藏"});
    }
    else{
      var where= {word:this.data.word};
      _collectionService.remove(where);
      this.setData({shoucang:"收藏"});
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    that = this;
    var where = {
      name: "wordNumber"
    };
    _shezhiService.getShezhi(where, function(result) {
      var wordNumber = result[0].value;
      that.wordNumber = wordNumber;

    });
    where = {
      name: "wordOrder"
    };
    _shezhiService.getShezhi(where, function(result) {
      var wordOrder = result[0].value;
      that.wordOrder = wordOrder;
      var id = result[0]._id;
      that.woid = id;
      that.setData({
        word: _cet4.wordList[that.wordOrder]
      });
      _webService.searchWord(that.data.word, function(result) {
        that.setData({
          translist: result
        });
      });

    });
    var today = Date.now();
    today = _dateService.myGetDate(new Date(today));
    this.today = today;
    where = ({
      name: this.today
    });
    _shezhiService.getShezhi(where, function(result) {
      var dateid = result[0]._id;
      that.dateid = dateid;
    });
    where = ({
      word: this.data.word
    });
    _collectionService.isCollected(where, function(result) {
      if (result != 0) {
        that.setData({
          shoucang: "取消收藏"
        });
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})