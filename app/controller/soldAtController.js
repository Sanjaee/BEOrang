// const Sold = require("../models/soldAtModel");
// const Sell = require("../models/sellAtModel");

// const getSold = async (req, res) => {
//   try {
//     const sold = await Sold.find();
//     res.json({ data: sold, message: "Success" });
//   } catch (error) {
//     console.error("Error fetching sold data:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// const selledBike = async (req, res) => {
//   const { bikeId } = req.params;
//   if (!bikeId) return res.status(400).send("Invalid BiKe" + bikeId);

//   try {
//     const bike = await Sell.findById(bikeId);
//     if (!bike) {
//       return res.status(400).json({ error: "Bike Not Found" });
//     }

//     const soldBike = new Sold({
//       name: bike.name,
//       policeNumber: bike.policeNumber,
//       frameNumber: bike.frameNumber,
//       price: bike.price,
//       capitalPrice: bike.capitalPrice,
//       category: bike.category,
//     });
//     // save sold bike
//     await soldBike.save();

//     // remove bike from available market
//     await Sell.findByIdAndDelete(bikeId);

//     res.status(200).json({ message: "Bike sold successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Server error" });
//   }
// };

// const deleteBike = async (req, res) => {
//   const { bikeId } = req.params;

//   try {
//     const deletedBike = await Sold.findByIdAndDelete(bikeId);

//     if (!deletedBike) {
//       return res.status(404).json({ error: "Bike not found" });
//     }

//     res.json({
//       message: "Successfully deleted",
//       deletedBike,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Server error" });
//   }
// };

// module.exports = { getSold, selledBike, deleteBike };
