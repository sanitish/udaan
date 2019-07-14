const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const TaskSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  frequency: {
    type: String
  }
});



var Tasks = mongoose.model('task', TaskSchema);
module.exports = Tasks;
