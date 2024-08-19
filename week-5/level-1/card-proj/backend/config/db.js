const mongoose = require("mongoose");
const mongoDBUri = require("../mongodburi");

mongoose.connect(mongoDBUri);

const cardSchema = mongoose.Schema({
  name: String,
  description: String,
  socialmedia: [],
  interests: [],
});

const cardModel = mongoose.model("card", cardSchema);

module.exports = cardModel;
