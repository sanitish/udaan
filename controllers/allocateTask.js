const mongoose = require('mongoose');

const AllocateTasks = require('../models/allocate_task');
const Assets = require('../models/assets');
const Worker = require('../models/workers');
const Tasks = require('../models/tasks');



exports.allocateTask = function(req, res, next) {
  const {
    assetId,
    taskId,
    workerId,
    timeOfAllocation,
    taskToBePerfomedBy
  } = req.body;

  if (!assetId && !taskId && !workerId && !timeOfAllocation && !taskToBePerfomedBy) {
    return res.status(422).send({
      error: 'You should provide info'
    });
  } else {
    const newAllocateTask = new AllocateTasks({
      assetId,
      taskId,
      workerId,
      timeOfAllocation,
      taskToBePerfomedBy
    })
    newAllocateTask.save()
      .then((result) => {
        res.json({
          code: 200,
          message: result
        })
      }).catch((err) => {
        next(err);
      })

  }
}

exports.getDetailsToAllocateTask = function(req, res, next) {
  Promise.all([

      Assets.find()
      .populate('assets')

      ,
      Worker.find().populate('workers'),
      Tasks.find().populate('task')

    ])
    .then((result) => {

      let assets = result[0];
      let workers = result[1];
      let tasks = result[2];

      res.json({
        code: 200,
        assets: assets,
        worker: workers,
        tasks: tasks
      })
    }).catch((err) => {
      next(err);
    })
}
