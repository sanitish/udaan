const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const User = require('./users');
// const Rooms = require('./rooms');
// Create Schema

const AllocateTaskSchema = new Schema({

  assetId: {
    type: Schema.Types.ObjectId,
    ref: 'asset'
  },
  taskId: {
    type: Schema.Types.ObjectId,
    ref: 'task'
  },
  workerId: {
    type: Schema.Types.ObjectId,
    ref: 'worker'
  },
  timeOfAllocation: {
    type: String

  },
  taskToBePerfomedBy: {
    type: String
  }


});


var AllocateTasks = mongoose.model('allocateTask', AllocateTaskSchema);
module.exports = AllocateTasks;
