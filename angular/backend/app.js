const express = require("express"); 
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");



const usersRoutes = require("./routes/users");

const app = express();

mongoose
  .connect(
   'mongodb+srv://teamAproject:teamAproject@cluster0-4anyn.mongodb.net/test?retryWrites=true',
      { useNewUrlParser: true }
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); 

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
  });

  app.use("/api/users",usersRoutes);
  module.exports = app;
  