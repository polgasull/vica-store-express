const express = require('express');
const router = express.Router();

const Project = require('../models/project-model.js');

router.get('/projects', (req, res, next) => {
  Project.find((err, projectList) => {
    if (err) {
      res.json(err);
      return;
    }
    res.json(projectList);
  });
});

router.post('/projects', (req, res, next) => {
  const theProject = new Project({
    name: req.body.name,
    location: req.body.location,
    surface: req.body.surface,
    duration: req.body.duration,
    description: req.body.description,
    tags: req.body.tags,
    image: req.body.image || ''
  });

  theProject.save((err) => {
    if (err) {
      res.json(err);
      return;
    }
    res.json({
      message: 'Well done, new project created!',
      id: theProject._id
    });
  });
});

router.get('/projects/:id', (req, res, next) => {
  const id = req.params.id;

  Project.findById(id, (err, theProject) => {
    if (err) {
      res.json(err);
      return;
    }
    res.json(theProject)
  });
});

router.patch('/projects/:id', (req, res) => {
  const id = req.params.id;

  const updates = {
    name: req.body.name,
    location: req.body.location,
    surface: req.body.surface,
    duration: req.body.duration,
    description: req.body.description,
    tags: req.body.tags,
    image: req.body.image || ''
  }

  Project.findByIdAndUpdate(id, updates, (err) => {
    if (err) {
      res.json(err);
      return;
    }

    res.json({
      message: "Project selected update successfully, well done!"
    });
  });
});

router.delete('/projects/:id', (req, res) => {
  const id = req.params.id;

  Project.remove({ _id: id}, (err) => {
    if (err) {
      res.json(err);
      return;
    }

    return res.json({
      message: "Phone selected successfully removed!"
    });
  });
});

module.exports = router;
