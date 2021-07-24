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


// ========================== //
router.delete("/:id", (req, res) => {
  LikeEvent.findByIdAndRemove(req.params.id, (err, deletedEvent) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
    res.status(200).json(deletedEvent);
  });
});


router.put("/:id", (req, res) => {
  LikeEvent.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedEvent) => {
      if (err) {
        res.status(400).json({ error: err.message });
      }
      res.status(200).json(updatedEvent);
    }
  );
});
// ========================== //

module.exports = router