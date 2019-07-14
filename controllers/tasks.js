const mongoose = require('mongoose');

const Tasks = require('../models/tasks');
// const Owner = require('../models/owner');
// const Users = require('../models/users');
// const Buildings = require('../models/buildings');



exports.addTask = function(req, res, next) {
  const {name,frequency} = req.body;

  if (!name && frequency) {
    return res.status(422).send({
      error: 'You should provide info'
    });
  } else {
    Tasks.find({
      name:name
    })
    .then((task) => {
      console.log(task);
      if(task.length>0){
        res.json({
          code:400,
          message:"task alreay exits"
        });
      }else{
        const newTask = new Tasks({
          name:name,
          frequency:frequency
        })
        newTask.save()
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
