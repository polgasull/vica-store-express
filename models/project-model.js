const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'The project name is required']
  },
  location: {
    type: String,
    required: [true, 'The project location is required']
  },
  surface: {
    type: String,
    required: [true, 'The project surface is required']
  },
  duration: {
    type: String,
    required: [true, 'The project duration is required']
  },
  description: {
    type: String,
    required: [true, 'The project description is required']
  },
  image: {
    type: String, default: ''
  },
  tags: {
    type: Array,
    default: []
  }
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
