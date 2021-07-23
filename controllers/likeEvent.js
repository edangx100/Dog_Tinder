const express = require("express")
const router = express.Router()
const LikeEvent = require("../models/LikeEvent")


router.get("/", (req, res) => {
    LikeEvent.find({}, (err, foundLikeEvents) => {
      if (err) {
        res.status(400).json({ error: err.message });
      }
      res.status(200).json(foundLikeEvents);
    });
  });
  
  router.post("/", (req, res) => {
    LikeEvent.create(req.body, (error, createdLikeEvents) => {
      if (error) {
        res.status(400).json({ error: error.message });
      }
      res.status(200).send(createdLikeEvents);
    });
  });

module.exports = router