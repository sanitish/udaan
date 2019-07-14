const express = require('express');
const router = express.Router();

const tasks = require('../controllers/tasks');

router.post('/add-task',tasks.addTask);


module.exports = router;
