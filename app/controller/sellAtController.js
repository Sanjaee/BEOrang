// const Sell = require("../models/sellAtModel");
// const Category = require("../models/categoryBikeModel");

// const addSell = async (req, res) => {
//   try {
//     const {
//       name,
//       policeNumber,
//       frameNumber,
//       price,
//       capitalPrice,
//       categoryBike,
//     } = req.body;

//     if (!categoryBike) {
//       return res.status(400).json({ error: "Category Bike is required" });
//     }

//     const category = await Category.findOneAndUpdate(
//       { name: categoryBike },
//       {},
//       { new: true, upsert: true }
//     );

//     const images = req.files.map(file => ({
//       url: file.filename,
//       altText: 'photo' // You can adjust this to include alt text if provided
//     }));

//     const newSell = new Sell({
//       name,
//       policeNumber,
//       frameNumber,
//       price,
//       capitalPrice,
//       category: category._id,
//       images
//     });

//     await newSell.save();

//     const populateSell = await Sell.findOne({ name: name }).populate(
//       "category"
//     );

//     populateSell.images = newSell.images

//     return res
//       .status(201)
//       .json({ message: "Sell data Berhasil Ditambahkan", data: populateSell });
//   } catch (error) {
//     console.error("Error adding sell data:", error.message);
//     return res.status(500).json({ message: "Internal Server Error" });
//   }
// };

// const getSell = async (req, res, next) => {
//   try {
//     let { category, skip = 0, limit = 10 } = req.query;

//     const filter = {};

//     if (category) {
//       const categoryObject = await Category.findOne({ name: category });

//       if (!categoryObject) {
//         return res.status(404).json({ error: "Category not found" });
//       }

//       filter.category = categoryObject._id;
//     }

//     let count = await Sell.countDocuments();
//     let sells = await Sell.find(filter)
//       .skip(parseInt(skip))
//       .limit(parseInt(limit))
//       .sort("-createdAt")
//       .populate("category")
//       .exec();

//     return res.json({
//       data: sells,
//       count,
//     });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ error: "Internal Server Error" });
//     next(error);
//   }
// };

// const getSellById = async (req, res) => {
//   const sellId = req.params.id;

//   try {
//     const sellData = await Sell.findById(sellId).populate("category");
//     if (!sellData) {
//       return res.status(404).json({ message: "Sell data not found" });
//     }
//     res.status(200).json(sellData);
//   } catch (error) {
//     console.error("Error retrieving sell data:", error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// };

// const deleteSell = async (req, res) => {
//   try {
//     const sellId = req.params.id;
//     const deletedSell = await Sell.findByIdAndDelete(sellId);
//     if (!deletedSell) {
//       return res.status(404).json({ message: "Sell data not found" });
//     }
//     res
//       .status(200)
//       .json({ message: "Sell data deleted successfully", data: deletedSell });
//   } catch (error) {
//     console.error("Error deleting sell data:", error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// };

// const updateSell = async (req, res) => {
//   try {
//     const sellId = req.params.id;
//     // const update = req.body;
//     const category = await Category.findOne({ name: req.body.categoryBike });
//     if (category === undefined) {
//       throw new Error("Category Not Found")
//     }
//     const {name, policeNumber, frameNumber,price, capitalPrice} = req.body
//     const update = {
//       name,
//       policeNumber,
//       frameNumber,
//       price,
//       capitalPrice,
//       category: category._id,
//     }
//     const updatedSell = await Sell.findByIdAndUpdate(sellId, update, {
//       new: true,
//     });
//     if (!updatedSell) {
//       return res.status(404).json({ message: "Sell data not found" });
//     }
//     res
//       .status(200)
//       .json({ message: "Sell data updated successfully", data: updatedSell });
//   } catch (error) {
//     console.error("Error updating sell data:", error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// };

// module.exports = {
//   getSell,
//   addSell,
//   getSellById,
//   deleteSell,
//   updateSell,
// };
