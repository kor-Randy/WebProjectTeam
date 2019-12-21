// models/Thing.js

var mongoose = require('mongoose');

var things_schema = new mongoose.Schema({
    name: String,
    des:String,
    price:String,
    count:String
  });

  module.exports = mongoose.model('thing',things_schema);//tablename is account+s