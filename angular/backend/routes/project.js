const express = require('express');
const ProjectRoute = express.Router();
const mongoose = require('mongoose');
const ProjectController = require('../controllers/project');

ProjectRoute.post('/project',ProjectController.buildProject);
ProjectRoute.get('/:projId',ProjectController.getProjbyTitle);

// ProjectController.delete('/project',ProjectController.deleteProject);
// router.get("/project", (req,res,next)=>{
//    console.log("successful");
//    res.status(200).json({
//        message: "cats fetch successfully"});
// });

// router.get("/project/:projectId", (req,res,next)=>{
//    const id = req.params.projectId;
//    Project.findById(id)
//    .exec()
//    .then(doc =>{
//        console.log(doc);
//        res.status()
//    })
// });
module.exports = ProjectRoute;