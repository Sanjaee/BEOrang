const mongoose = require("mongoose");

const categoryBikeScheema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const Category = mongoose.model("category", categoryBikeScheema);

module.exports = Category;
