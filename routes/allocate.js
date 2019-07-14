const express = require('express');
const router = express.Router();

const allocateTask = require('../controllers/allocateTask');

router.post('/allocateTask',allocateTask.allocateTask);
 router.get('/getDetailsToAllocateTask', allocateTask.getDetailsToAllocateTask);


module.exports = router;
