const express = require('express');
const excelRoutes=require('./Routes/excelRoutes')
const app = express();
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));




app.use('/api', excelRoutes);

module.exports = app;


