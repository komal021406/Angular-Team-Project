const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Resources = require('../models/resource2');

router.post('/resources',(req,res,next)=>{
    console.log("errir here");
    console.log(req.body);
    console.log(req.body.data[0].name);
    console.log(req.body.data[0].code); 
    const resources = new Resources({
        //_id: new mongoose.Schema.Types.ObjectId(),
        title: req.body.title,
        data:[{
        name: req.body.data[0].name,
        code: req.body.data[0].code}]
    });
    resources
    .save().then(result =>{
        console.log(req.body.title);
        console.log(result);
        console.log(req.body.title);
    })
    .catch(err=>console.log(err));

    res.status(201).json({
        message: "Handling PoST requests to /resource",
        createdResource: resources
    });
}); 

router.get("/resources", (req,res)=>{
    console.log("successful");
   // const PostQuery = Resource.findOne({title:"Project1"});
    const PostQuery = Resources.find();
    console.log(PostQuery);

  PostQuery
    .then(doc =>{
        const tabledata = doc.data;
        console.log("json data")
        console.log(tabledata);
       // fetchedRessource =doc;
       res.status(200).json(
         //  message: "get method worked" ,
            doc
       );
   
    })
    .catch(err=>console.log(err));
    
    });
router.get("/resources/:resourceId", (req,res,next)=>{
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