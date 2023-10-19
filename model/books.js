const mongoose = require("mongoose");

const BookSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "title can not be empty"],
    maxlength: [100, "title can not be more than 100 characters"],
    minlength: [3, "title can not be less than 3"],
    unique: true,
  },
  author: {
    type: String,
    required: [true, "author name can not be emtpy"],
    maxlength: [100, "author name can not be more than 100 characters"],
    minlength: [3, "author name can not be less than 3 characters"],
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  pub_date: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  ISBN: {
    type: String,
    required: true,
    match: [/^[0-9,\-]*/g, "Please provide a valid ISBN"],
  },
});

module.exports = mongoose.model("books", BookSchema);
