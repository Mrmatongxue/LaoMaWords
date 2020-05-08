//弹框提示
var alertService= {
  showAlert:function(title,message,button){
    wx.showModal({
      title: title,
      content: message,
      confirmText: button,
      showCancel:false
    })
  }
};
module.exports = alertService;