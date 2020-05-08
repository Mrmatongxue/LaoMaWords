//单词数据库服务
var wordStorage = {
  //数据库服务
  _dbService : require("dbService.js"),

  //得到n个单词
  getwords : function(number,callback){
    this.wordCollection.limit(number).get({
      success:function(result){
        callback(result.data);
      }
    });
  }

}

wordStorage.wordCollection = wordStorage._dbService.db.collection("words");

module.exports = wordStorage;