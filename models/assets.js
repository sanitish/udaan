"use strict"
var mongoose = require('mongoose');

var AssetSchema = mongoose.Schema({
      name: String
      });


    var Assets = mongoose.model('asset', AssetSchema); module.exports = Assets;
