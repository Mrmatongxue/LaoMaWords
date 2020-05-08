//日期转换服务
var dateService = {
  //得到日期格式yyyy-mm-dd
  myGetDate: function(date) {
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    return [year, month, day].map(formatNumber).join('-');
  },
  sleep: function(delay) {
    var start = (new Date()).getTime();
    while ((new Date()).getTime() - start < delay) {
      continue;
    }
  }
}

const formatNumber = n => {
  n = n.toString();
  return n[1] ? n : '0' + n;
}
module.exports = dateService;