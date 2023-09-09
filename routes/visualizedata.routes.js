const express = require('express');
const router = express.Router();
const visualizeDataController = require('../controller/visualizedata.controller');

router.get('/get',visualizeDataController.getAllVisualizeData);

module.exports = router