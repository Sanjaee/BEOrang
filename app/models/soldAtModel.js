const mongoose = require("mongoose");

const soldAtSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    policeNumber: {
      type: String,
      required: true,
    },
    frameNumber: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    capitalPrice: {
      type: Number,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },

  },
  { timestamps: true }
);

const Sold = mongoose.model("sold", soldAtSchema);

module.exports = Sold;
