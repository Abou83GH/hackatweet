var express = require("express");
var router = express.Router();

const Tweet = require("../models/tweets");
const { checkBody } = require("../modules/checkBody");
const uid2 = require("uid2");
const bcrypt = require("bcrypt");

/* POST Tweet */
router.post("/tweets", (req, res) => {
  // Check if there are empty fields before proceeding with the next checkpoints
  if (!checkBody(req.body, ["content"])) {
    res.json({ result: false, error: "Missing or empty fields" });
    return;
  }
  const newTweet = new Tweet({
    content: req.body.content,
    user: req.body.user,
  });

  newTweet.save().then((newDoc) => {
    res.json({
      result: true,
      owner: newDoc.user,
      message: "Message successfully posted",
    });
  });
});

/* GET ALL TWEETS */
router.get("/tweets/all", (req, res) => {
  Tweet.find().then(data => {
    res.json({ result: data, message: 'List of all tweets'})
  })
})

/* DELETE Tweet */
router.delete("/tweets", (req, res) => {
  if (!checkBody(req.body, ["_id"])) {
    res.json({ result: false, error: "Missing or empty fields" });
    return;
  }
  Tweet.findByIdAndDelete(req.body._id)
  .then(deletedTweet => {
    if (deletedTweet) {
      res.json({result: true, message: 'Tweet Deleted'})
    } else {
      res.json({result: false, error: 'Tweet Unfound'})
    }
  })
});

module.exports = router;
