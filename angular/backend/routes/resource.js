const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Resource = require('../models/resource');

router.post('/resource',(req,res,next)=>{
   console.log(req.body);
    console.log(req.body.data[0].name);
    console.log(req.body.data[1].code); 
    const resource = new Resource({
        //_id: new mongoose.Schema.Types.ObjectId(),
        title: req.body.title,
        data:[{
        name: req.body.data[0].name,
        code: req.body.data[1].code}]
    });
    resource
    .save().then(result =>{
        console.log(req.body.title);
        console.log(result);
        console.log(req.body.title);
    })
    .catch(err=>console.log(err));

    res.status(201).json({
        message: "Handling PoST requests to /resource",
        createdResource: resource
    });
}); 

router.get("/resource", (req,res)=>{
    console.log("successful");
   // const PostQuery = Resource.findOne({title:"Project1"});
    const PostQuery = Resource.find();
    console.log(PostQuery);

  PostQuery
    .then(doc =>{
        const tabledata = doc.data;
        console.log( "Hi" + doc.data);

       // fetchedRessource =doc;
       res.status(200).json(doc);
   
    })
    .catch(err=>console.log(err));
    
    });




router.get("/resource/:resourceId", (req,res,next)=>{
    const id = req.params.resourceId;
    resource.findById(id)
    .exec()
    .then(doc =>{
        console.log(doc);
        res.status(200).json(doc);
    })
    .catch(err=>{
        console.log(err);
        res.statusMessage(500).json({error:err});
    });
});


module.exports = router;

































/* const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Resource = require('../models/resource');

router.post('/resource',(req,res)=>{debugger
    console.log("errir here");
    // console.log(req.body);
    // console.log(req.body.data[0].name);
    // console.log(req.body.data[1].code);
    const resource = new Resource({
        //_id: new mongoose.Schema.Types.ObjectId(),
        
        title: req.body.title,
        data:[{
        name: req.body.data[0].name,
        code: req.body.data[1].code}]
    });
    debugger
    resource
    .save().then(result =>{
        console.log(req.body.title);
        console.log(result);
        console.log(req.body.title);
        console.log(result);
    })
    .catch(err=>console.log(err));
    debugger
    res.status(201).json({
        message: "Handling PoST requests to /resource",
        createdResource: resource
    });
}); 

router.get("/resource", (req,res)=>{
    console.log("successful");
  
    let fetchedRessource;
    const PostQuery = Resource.findOne({title:"Project1"});
   
  PostQuery
    .then(doc =>{
        const tabledata = doc.data;
        console.log(doc.data);
       // fetchedRessource =doc;
       res.status(200).json({
           message: "get method worked" ,
            table: tabledata
        
       });
        // console.log(doc);
   
    })
    .catch(err=>console.log(err));
});


router.get("/resource/:resourceId", (req,res,next)=>{
    const id = req.params.resourceId;
    resource.findById(id)
    .exec()
    .then(doc =>{
        console.log(doc);
        res.status()
    })
});
module.exports = router; */