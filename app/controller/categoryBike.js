// const Category = require("../models/categoryBikeModel");

// const addCategory = async (req, res) => {
//   try {
//     const { name } = req.body;

//     const category = new Category({
//       name,
//     });

//     const newCategory = await category.save();

//     res
//       .status(201)
//       .json({ message: "Category data added successfully", data: newCategory });
//   } catch (error) {
//     console.error("Error adding Category data:", error.message);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// };

// const getCategory = async (req, res) => {
//   try {
//     const category = await Category.find({}, "-__v");
//     res.status(200).json(category);
//   } catch (error) {
//     console.error("Error retrieving category data:", error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// };

// const getCategoryById = async (req, res) => {
//   const categoryId = req.params.id;

//   try {
//     const category = await Category.findById(categoryId);
//     if (!category) {
//       return res.status(404).json({ message: "category data not found" });
//     }
//     res.status(200).json(category);
//   } catch (error) {
//     console.error("Error retrieving category data:", error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// };

// const deleteCategory = async (req, res) => {
//   try {
//     const categoryId = req.params.id;
//     const deletedCategory = await Category.findByIdAndDelete(categoryId);
//     if (!deletedCategory) {
//       return res.status(404).json({ message: "Category data not found" });
//     }
//     res.status(200).json({
//       message: "Category data deleted successfully",
//       data: deletedCategory,
//     });
//   } catch (error) {
//     console.error("Error deleting Category data:", error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// };

// const updateCategory = async (req, res) => {
//   try {
//     const categoryId = req.params.id;
//     const update = req.body;
//     const updateCategory = await Category.findByIdAndUpdate(
//       categoryId,
//       update,
//       {
//         new: true,
//       }
//     );
//     if (!updateCategory) {
//       return res.status(404).json({ message: "Sell data not found" });
//     }
//     res
//       .status(200)
//       .json({
//         message: "Sell data updated successfully",
//         data: updateCategory,
//       });
//   } catch (error) {
//     console.error("Error updating sell data:", error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// };

// module.exports = {
//   getCategory,
//   addCategory,
//   deleteCategory,
//   updateCategory,
//   getCategoryById,
// };
