const Project= require('../models/project');

exports.buildProject = (req,res,next) => {
    
    const projTitle=req.body.title;


    //zhaodao le
    if( Project.findOne({title:projTitle}) ){
        Project.deleteOne({title:'projTitle'});
    
    
    const project = new Project({
    title: req.body.title,
    data:req.body.data 
    })

    project
    .save()
    // .catch(err=>console.log(err));
    res.status(201).json({
        message: "Handling Post requests to /project11",
        createdProject: req.body.data
    });
}   //mei zhaodao 
    else{
        console.log(req.body);
        const project = new Project({
        title: req.body.title,
        data:[{ name: req.body.name, code: req.body.code}] 
    })

    project
        .save().then(result =>{
        console.log(req.body.title);
        console.log(result);
    })
    .catch(err=>console.log(err));
    res.status(201).json({
        message: "Handling Post requests to /project22",
        createdProject: project 
    });
    }

    
 }

 exports.getProjbyTitle=(req,res,next)=>{
    //  const pageSize = +req.query.pageSize;
    //  const currentPage= +req.query.page
     let fetchedProj;
     console.log(req.params.projId);
    //  const count;
     const ProjQuery=Project.findOne({title:req.params.projId});
    //  if (pageSize && currentPage) {
    //     ProjQuery.skip(pageSize * (currentPage - 1)).limit(pageSize);
    //   }
     ProjQuery
     .then(document => {
         res.status(200).json({
             message:"success",
             shownproject:document
         })
        fetchedProj = document;
        // return ProjQuery.data.count();
        
      })
    //   .then(count => {
    //     res.status(200).json({
    //       message: "Posts fetched successfully!",
    //       shownProject: fetchedPosts,
    //     //   maxEntries: count
    //     });
    //   })
    //  .then(doc=>{
    //      const tabledata = doc.data;
    //      res.status(200).json({
    //          message:"got Proj",
    //          table:tabledata
    //      })
    //  })
     .catch(err => console.log(err));
}
