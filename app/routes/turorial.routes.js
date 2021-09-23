module.exports = app => {
  const tutorials = require("../controllers/tutorial.controller.js");

  var router = require("express").Router();

  const Info = require("../models/tutorial.model")
  const User = require("../models/User")

  const mongoose = require("mongoose")

  router.post("/add", (req,res)=>{

    const info = new Info({
        _id: new mongoose.Types.ObjectId(),
        type: req.body.type,
        depot: req.body.depot
    })
    info.save()
    .then(result => {
        console.log(result)
        res.status(201).json({
            message: "Info added for this product",
            Info: result
        })
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            error: err
        })
    })

    // console.log(req.body)
    // res.status(201).send({
    //   message: "success",
    // })
  });

  router.get('/depot_count/:depot', (req, res, next) => {

    const depot = req.params.depot

    Info.countDocuments({depot: depot})
    .then(result => {
        //console.log(result)
        res.status(201).json({
            count: result
        })
    })
    .catch(err => {
        res.status(500).json({
            error: err
        })
    })
  })

  router.get('/type_count/:type', (req, res, next) => {

    const type = req.params.type

    Info.countDocuments({type: type})
    .then(result => {
        //console.log(result)
        res.status(201).json({
            count: result
        })
    })
    .catch(err => {
        res.status(500).json({
            error: err
        })
    })
  })

  router.get("/total", (req, res, next) => {

    Info.countDocuments()
    .then(result => {
        //console.log(result)
        res.status(201).json({
            count: result
        })
    })
    .catch(err => {
        res.status(500).json({
            error: err
        })
    })
  })

  router.get('/type_depot_count/:depot/:type', (req, res, next) => {

    const depot = req.params.depot
    const type = req.params.type

    Info.countDocuments({depot: depot}).where({type: type})
    .then(result => {
        // //console.log(result)
        res.status(201).json({
            count: result
        })
    })
    .catch(err => {
        res.status(500).json({
            error: err
        })
    })
  })

  router.post('/login/:Id/:password', (req, res, next) => {

    User.find({$and:[{Id: req.params.Id},{password: req.params.password}]})
    .then(result => {
        res.status(200).json({
            flag: true,
            message: "Match"
        })
    })
    .catch(err => {
        res.status(500).json({
            message: "Invalid Id or password",
            error: err
        })
    })
    
})

  // Create a new Tutorial
  router.post("/", (res, req, next) => {
      res.status(201).json({
          message: "heroku"
      })
  });



  // Retrieve all Tutorials
  router.get("/", tutorials.findAll);

  // Retrieve all published Tutorials
  router.get("/published", tutorials.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", tutorials.findOne);

  // Update a Tutorial with id
  router.put("/:id", tutorials.update);

  // Delete a Tutorial with id
  router.delete("/:id", tutorials.delete);

  // Create a new Tutorial
  router.delete("/", tutorials.deleteAll);

  app.use("/api", router);
};
