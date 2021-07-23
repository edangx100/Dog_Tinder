const express = require("express");
const Holiday = require('../models/holidays');
const router = express.Router();

// gets all holidays - like index
router.get("/", (req, res) => {
  // res.send("ready");
  Holiday.find({}, (err, foundHolidays) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
    res.status(200).json(foundHolidays);
  });

// create a holiday
router.post('/', (req,res) => {
  // create db
  Holiday.create(req.body,(error,createdHoliday) => {
      if (error) {
          res.status(400).json({ error: error.message });
        }
        // .json() will send proper headers in response so client knows it's json coming back
        res.status(200).send(createdHoliday);
})
});

 
// delete a holiday
router.delete("/:id", (req, res) => {
  Holiday.findByIdAndRemove(req.params.id, (err, deletedHoliday) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
    res.status(200).json(deletedHoliday);
  });
});

  });

module.exports = router;