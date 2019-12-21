

var mongoose = require('mongoose');

var orders_schema = new mongoose.Schema({
    thing_id: String,
    address:String,
    count:String,
    user_id:String
  });

  module.exports = mongoose.model('order',orders_schema);//tablename is account+s