const mongoose = require("mongoose");
const schema = mongoose.Schema;

const postSchema = new schema({
  title: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  detail: {
    type: String,
    required: true,
  },
  map_url: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  cover_photo: {
    type: String,
    required: true,
  },
  first_photo: {
    type: String,
    required: true,
  },
  second_photo: {
    type: String,
    required: true,
  },
  fav: {
    type: String,
    default: "none",
  },
  open_hour: {
    type: String,
    required: true,
  },
  close_hour: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("post", postSchema);
