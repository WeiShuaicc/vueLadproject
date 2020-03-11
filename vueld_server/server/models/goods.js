var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var produtSchema = new Schema({
  "productId":{type:String},
  "productName":String,
  "salePrice":Number,
  "checked":String,
  "productNum":Number,
  "productImage":String
});
// 注意  这里定义 Good  会对数据库中的goods表进行关联  如果是good则不会成功，则需要module.exports = mongoose.model('Good',produtSchema,'good');
module.exports = mongoose.model('Good',produtSchema);
