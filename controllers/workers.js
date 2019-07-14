const mongoose = require('mongoose');
var moment = require('moment');

const Worker = require('../models/workers');
// const Owner = require('../models/owner');
// const Users = require('../models/users');
// const Buildings = require('../models/buildings');



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

// exports.getTasks = function(req, res, next) {
//   Assets.find({
//     })
//     .then((assets) => {
//
//       res.json({
//         assets
//       });
//     }).catch((err) => {
//       next(err)
//     })
// }
