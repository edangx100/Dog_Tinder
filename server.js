require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGODB_URI;
const path = require('path');

// Mongoose connection
mongoose.connection.on("error", (err) =>
  console.log(err.message + " is Mongod not running?")
);
mongoose.connection.on("disconnected", () => console.log("mongo disconnected"));
 
//...farther down the page
 
mongoose.connect(MONGODB_URI, {
useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true
});

mongoose.connection.once("open", () => {
    console.log("connected to mongoose...");
  });

// Middleware
app.use(express.static('./front_end/build')); 
app.use(express.json()); 

const holidaysController = require("./controllers/holidays.js");
app.use("/holidays", holidaysController);

app.listen(PORT, () => {
    console.log("🎉🎊", "matching happening on port", PORT, "🎉🎊");
  });
  
