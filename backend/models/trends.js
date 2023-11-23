const mongoose = require('mongoose');

const trendSchema = mongoose.Schema({
  tweet: {type: mongoose.Schema.Types.ObjectId, ref:'tweets'},
  hashtag: String,
});

const Trend = mongoose.model('trends', trendSchema);

module.exports = Trend;