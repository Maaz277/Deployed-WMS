const express = require("express");
// const bodyParser = require("body-parser"); /* deprecated */
const cors = require("cors");
const app = express();
const logger = require("morgan")

var router = require("express").Router();

const Info = require("./app/models/tutorial.model")
const mongoose = require("mongoose")

app.use(cors());
app.use(logger('dev'))

// parse requests of content-type - application/json
app.use(express.json());  /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));   /* bodyParser.urlencoded() is deprecated */

const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

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


require("./app/routes/turorial.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
