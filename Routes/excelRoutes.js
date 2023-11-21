// excelRoutes.js
const express = require('express');
const multer = require('multer');

const excelControllers = require('./../controllers/excelControllers');

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post('/upload', upload.single('file'), excelControllers.uploadExcel);
router.get('/data', excelControllers.getAllData);
router.get('/data/:id', excelControllers.getDataById);
router.put('/data/:id', excelControllers.updateDataById);
router.delete('/data/:id', excelControllers.deleteDataById);

module.exports = router;
