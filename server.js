require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGODB_URI;

// Mongoose connection
mongoose.connection.on("error", (err) =>
  console.log(err.message + " is Mongod not running?")
);
mongoose.connection.on("disconnected", () => console.log("mongo disconnected"));

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

mongoose.connection.once("open", () => {
  console.log("connected to mongoose...");
});

// Middleware
app.use(express.json());

// Controllers
const usersController = require("./controllers/user");
const dogsController = require("./controllers/dog");
const likeEventsController = require("./controllers/likeEvent")
app.use("/users", usersController)
app.use("/dogs", dogsController)
app.use("/likeevents", likeEventsController)

app.listen(PORT, () => {
  console.log("Matching happening on port", PORT);
});
