const mongoose = require('mongoose');
var moment = require('moment');

const Assets = require('../models/assets');
// const Owner = require('../models/owner');
// const Users = require('../models/users');
// const Buildings = require('../models/buildings');



exports.addAsset = function(req, res, next) {
  const {name} = req.body;

  if (!name ) {
    return res.status(422).send({
      error: 'You should provide info'
    });
  } else {
    Assets.find({
      name:name
    })
    .then((asset) => {
      console.log(asset);
      if(asset.length>0){
        res.json({
          code:400,
          message:"asset alreay exits"
        });
      }else{
        const newAsset = new Assets({
          name:name
        })
        newAsset.save()
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

exports.getAssets = function(req, res, next) {
  Assets.find({
    })
    .then((assets) => {

      res.json({
        assets
      });
    }).catch((err) => {
      next(err)
    })
}
//
// exports.getBuilding = function(req, res, next) {
//   Buildings.findById({
//       _id: req.body.buildingId
//     })
//     .then((building) => {
//       //  var b=owner.totalBuildings;
//       // var b=owner.buildings.length;
//       res.json({
//         building
//       });
//     }).catch((err) => {
//       next(err);
//     })
// }
//
// //fix this
// exports.editBuild = function(req, res, next) {
//   const building = {name , floor,type} = req.body;
//   const address = {state, city,pincode,addressLine1,addressLine2 } =req.body;
//  Buildings.findOne({
//    _id:req.body.buildingId
//  }).then((building)=>{
//    if(building &&name&&address&&floor){
//      building.name=name;
//      building.address =address;
//      building.floor = floor;
//      building.type = type;
//
//
//      building.save()
//      .then(()=>{
//        res.send(building);
//      }).catch((err)=>{
//        next(err);
//      })
//    }else {
//      res.status(400).send('building not found')
//    }
//  }).catch((err)=>{
//    next(err);
//  })
// }
