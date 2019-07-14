const mongoose = require('mongoose');

const Worker = require('../models/workers');
const AllocateTasks = require('../models/allocate_task');


exports.addWorker = function(req, res, next) {
  const {
    name,
    description
  } = req.body;
  console.log(description);
  if (!name || !description) {
    return res.status(422).send({
      error: 'You should provide info'
    });
  } else {
    Worker.find({
        name: name
      })
      .then((worker) => {
        console.log(worker);
        if (worker.length > 0) {
          res.json({
            code: 400,
            message: "worker alreay exits"
          });
        } else {
          const newWorker = new Worker({
            name: name,
            description: description
          })
          newWorker.save()
            .then((result) => {
              res.json({
                code: 200,
                message: result
              })
            }).catch((err) => {
              next(err);
            })
        }
      }).catch((err) => {
        next(err);
      })
  }
}


 exports.getTaskForWorker = function(req, res, next) {
  AllocateTasks.find({
    workerId:req.params.id
    })
    .then((tasks) => {
      res.json({
        tasks
      });
    }).catch((err) => {
      next(err)
    })
}
