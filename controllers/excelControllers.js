
const xlsx = require('xlsx');
const ExcelModel = require('../Models/excelModel');
exports.uploadExcel = async (req, res) => {
  try {
    const workbook = xlsx.read(req.file.buffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const data = xlsx.utils.sheet_to_json(sheet, { defval: '' });

    const insertedData = await ExcelModel.insertMany(data);
    res.status(200).json(insertedData);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
};

exports.uploadExcelAndGetData = async (req, res) => {
  try {
    const workbook = xlsx.read(req.file.buffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const data = xlsx.utils.sheet_to_json(sheet, { defval: '' });

    const insertedData = await DataModel.insertMany(data);

    // Retrieve data by ID
    const id = req.params.id;
    const dataById = await DataModel.findById(id);

    if (!dataById) {
      return res.status(404).json({ message: 'Data not found for the provided ID' });
    }

    res.status(200).json({ insertedData, dataById });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
};




// Get all data from MongoDB
exports.getAllData = async (req, res) => {
  try {
    const data = await ExcelModel.find();
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
};

// Get data by ID from MongoDB
exports.getDataById = async (req, res) => {
  try {
    const data = await ExcelModel.findById(req.params.id);
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
};

// Update data by ID in MongoDB
exports.updateDataById = async (req, res) => {
  try {
    const updatedData = await ExcelModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedData);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
};

// Delete data by ID from MongoDB
exports.deleteDataById = async (req, res) => {
  try {
    const deletedData = await ExcelModel.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedData);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
};

