//收藏服务
var collectionService = {
  _dbService: require("dbService.js"),

  insert:function(word,translist){
    this.wordsCollection.add({data:{
      word:word,
      translist:translist
    },
    success:function(res){
      console.log("单词收藏成功！");
    }})
  },
  remove:function(where){
    this.wordsCollection.where(where).remove();
  },
  isCollected:function(where,callback){
    this.wordsCollection.where(where).count({
      success: function (res) {
        callback(res.total);
      }
    })
  },
  getCollections:function(skip,limit,callback){
    this.wordsCollection.skip(skip).limit(limit).get({
      success:function(result){callback(result.data)},
      fail:console.error
    })
  }
}

collectionService.wordsCollection = collectionService._dbService.db.collection("wordsCollection");

module.exports = collectionService;