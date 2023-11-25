const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
  },
  desc: {
    type: String,
  },
  price: {
    type: Number,
  },
  desc: {
    type: String,
  },
  offer: {
    type: Number,
  },
  images: [
    {
      url: {
        type: String,
      },
    },
  ],
  category: {
    type: String,
  },
  rating: {
    type: Number,
  },
  review: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "user",
      },
      message: {
        type: String,
      },
    },
  ],

  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Food", foodSchema);
