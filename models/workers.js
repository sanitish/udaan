const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const WorkerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description:
    {
      type: String,
      required: true
    }


});

var Worker = mongoose.model('worker', WorkerSchema);
module.exports = Worker;
