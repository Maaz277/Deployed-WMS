module.exports = app => {
  var router = require("express").Router();

  const Info = require("../models/Info")
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

  router.get('/login', (req, res, next) => {

    User.findOne({Id: req.body.Id, password: req.body.password})
    .then(result => {
        console.log(result)
        if(result){
            res.status(200).json({
                flag: true,
                message: "Match",
                result: result
            })
        }
        else{
            throw {error: true, message: "Sorry, Invalid ID or Password.", result: result}
        }
    })
    .catch(err => {
        res.status(500).json({
            error: err
        })
    })
    
})

app.use("/api", router);
};
