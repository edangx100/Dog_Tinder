const express = require("express")
const router = express.Router()
const User = require("../models/User")

router.get("/", (req, res) => {
    User.find({}, (err, foundUsers) => {
      if (err) {
        res.status(400).json({ error: err.message });
      }
      res.status(200).json(foundUsers);
    });
  });

  router.post("/", (req, res) => {
    User.create(req.body, (error, createdUser) => {
      if (error) {
        res.status(400).json({ error: error.message });
      }
      res.status(200).send(createdUser);
    });
  });

module.exports = router