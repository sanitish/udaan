const express = require('express');
const router = express.Router();

const tasks = require('../controllers/tasks');

router.post('',tasks.addTask);


module.exports = router;
