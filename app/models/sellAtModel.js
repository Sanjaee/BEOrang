const mongoose = require("mongoose");

const sellAtSchema = new mongoose.Schema(
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
      ref: "category",
    },
    images: {
      type: [
        {
          type: {
            url: String,
          },
          altText: {
            type: String,
          },
        },
      ],
      validate: {
        validator: function (array) {
          return array.length === 3;
        },
        message: "You must provide exactly 3 images.",
      },
    },
  },
  { timestamps: true }
);

const Sell = mongoose.model("sell", sellAtSchema);

module.exports = Sell;
