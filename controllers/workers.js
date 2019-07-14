const mongoose = require('mongoose');
var moment = require('moment');

const Worker = require('../models/workers');
const AllocateTasks= require('../models/allocate_task');


exports.addWorker = function(req, res, next) {
  const {name,skills} = req.body;
  console.log(skills);
  if (!name && skills) {
    return res.status(422).send({
      error: 'You should provide info'
    });
  } else {
    Worker.find({
      name:name
    })
    .then((worker) => {
      console.log(worker);
      if(worker.length>0){
        res.json({
          code:400,
          message:"worker alreay exits"
        });
      }else{
        const newWorker = new Worker({
          name:name,
          skills:skills
        })
        newWorker.save()
          .then((result) => {
            res.json({
              code:200,
              message:result
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
   console.log(req.parames);
  AllocateTasks.find({
    workerId:req.parames.id
    })
    .then((tasks) => {
      res.json({
        tasks
      });
    }).catch((err) => {
      next(err)
    })
}
