const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const worker = require('../controllers/workers');
// Load User Model

router.post('', worker.addWorker);
router.post('/:?', worker.getTaskForWorker);

module.exports = router;
