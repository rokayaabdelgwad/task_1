
const mongoose = require('mongoose');

const excelSchema = new mongoose.Schema({
  ID:Number,
  Name: String,
 Description:{
    type:String,
    trim:true
  },
  Location: String,
  Price: Number,
  Color:String
});

const ExcelModel = mongoose.model('Excel', excelSchema);

module.exports = ExcelModel;
