var express = require("express");
var router = express.Router();

const User = require('../models/users');
const { checkBody } = require('../modules/checkBody');
const uid2 = require('uid2');
const bcrypt = require('bcrypt');

/* GET ALL USERS */
router.get("/all", (req, res) => {
  User.find().then(data => {
    res.json({ result: data, message: 'List of all current users'})
  })
})

/* POST SIGN UP */
router.post("/signup", (req, res) => {
  // Check if there are empty fields before proceeding with the next checkpoints
  if (!checkBody(req.body, ["firstname", "username", "password"])) {
    res.json({ result: false, error: "Missing or empty fields" });
    return;
  }

  // Check if the user has not already been registered
  User.findOne({ username: req.body.username }).then((data) => {
    if (data === null) {
      // Hashing password
      const hash = bcrypt.hashSync(req.body.password, 10);
      // New user creation and saving
      const newUser = new User({
        firstname: req.body.firstname,
        username: `@${req.body.username}`,
        password: hash,
        token: uid2(32),
        canBookmark: true,
      });

      newUser.save().then((newDoc) => {
        res.json({ result: true, username: newDoc.username, token: newDoc.token, message: 'Account successfully created' });
      });
    } else {
      // User already exists in database
      res.json({ result: false, error: "User already exists" });
    }
  });
});


/* POST SIGN IN */

router.post('/signin', (req, res) => {
    // Check if there are empty fields before proceeding with the next checkpoints
  if (!checkBody(req.body, ['username', 'password'])) {
    res.json({ result: false, error: 'Missing or empty fields' });
    return;
  }

    // Check if the user already exists
  User.findOne({ username: req.body.username }).then(data => {
    if (data && bcrypt.compareSync(req.body.password, data.password)) {
      res.json({ result: true, username: data.username, token: data.token, message: 'You are logged in'});
    } else {
      res.json({ result: false, error: 'User not found or wrong password' });
    }
  });
});


module.exports = router;
