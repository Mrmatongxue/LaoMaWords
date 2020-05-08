// miniprogram/pages/lmCollection/collection.js
var that = null;
var _collectionService = require("../../services/collectionService.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wordsCollection:[],
    status:"",
    isremove:[]
  },
  //是否能加载更多结果
  CanLoadMore : true,
  
  Loading : "正在加载",

  NoMoreResult : "没有更多收藏",

  NoOne : "没有任何收藏",

  PageSize : 15,

  load:function(){
    //如果没有更多结果
    if(!this.CanLoadMore)return;
    this.setData({status:this.Loading});

    _collectionService.getCollections(this.data.wordsCollection.length, this.PageSize, function (result) {
      that.setData({ wordsCollection: that.data.wordsCollection.concat(result) });

      if(result.length<that.PageSize){
        that.CanLoadMore=false;
        that.setData({
          status:that.NoMoreResult
        });
      };
    });
  },
  cancel:function(event){
    var index = event.target.dataset.wordindex;
    var word = this.data.wordsCollection[index].word;
    var where = {word:word};
    console.log(index);
    console.log(word);
    console.log(where);
    _collectionService.remove(where);
    this.data.isremove[index]=true;
    
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
    // _collectionService.getCollections(this.data.wordsCollection.length,this.PageSize,function(result){
    //   that.setData({wordsCollection:result});
    // });
    this.setData({wordsCollection:[]});
    this.setData({status:""});
    this.load();

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
    this.load();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})