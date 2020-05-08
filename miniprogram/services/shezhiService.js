//设置服务，存储有关设置和一些默认信息
var shezhiService = {
  _dbService: require("dbService.js"),

  getShezhi: function (where, callback) {
    this.shezhi.where(where).get({
      success: function (result) {
        callback(result.data);
      },
    });
  },

  updateShezhi: function (id, value) {
    this.shezhi.doc(id).update({data:{value:value},
    success:function(res){
      console.log(res.data)
    } });

  },
  insertShezhi: function (name,value,callback) {
    this.shezhi.add({ data: { name:name,value:value }, success: function (result) { callback(result); } })
  },

  chushihuaShezhi:function(where,callback){
    this.shezhi.where(where).count({success:function(res){
      callback(res.total);
    }})
  },
  //重置wordOrder
  chongzhi: function(){
    var id="";
    this.shezhi.where({name:"wordOrder"}).get({
      success:function(result){
        id=result.data[0]._id;
        console.log(id);
        shezhiService.shezhi.doc(id).update({
          data: { value: 0 },
          success: function (res) {
            console.log("已背单词序号重置成功！");
          }
        });
      }
    });
    console.log(id);
    
  },
  incNumber:function(id){
    this.shezhi.doc(id).update({
      data:{
        value:this._.inc(1)
      }
    })
  }
}

shezhiService.shezhi = shezhiService._dbService.db.collection("shezhi");

shezhiService._ = shezhiService._dbService.db.command;

module.exports = shezhiService;