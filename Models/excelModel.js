
const mongoose = require('mongoose');

const excelSchema = new mongoose.Schema({
  id: Number,
  name: String,
  action: String,
  responsibilities: String,
  dueTo: Date,
});

const ExcelModel = mongoose.model('Excel', excelSchema);

module.exports = ExcelModel;
