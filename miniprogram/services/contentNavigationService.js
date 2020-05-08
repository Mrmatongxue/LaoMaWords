//内容页导航服务
var contentNavigationService = {
  //设置界面
  shezhiPage : "../lmShezhi/shezhi",
  //背词页面
  beiciPage : "../lmBeici/beici",
  //选择词书页面
  cishuPage : "../lmCishu/cishu",
  //
  dateSearchPage : "../lmDateSearch/dateSearch",
  
  collectionPage : "../lmCollection/collection",

  navigateToAsync: function (pageKey) {
    wx.navigateTo({
      url: pageKey
    })
  },
  back: function(){
    wx.navigateBack({
      delta: 2
    })
  }
}

module.exports = contentNavigationService;