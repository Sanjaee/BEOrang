const router = require("express").Router();
const categoryController = require("../controller/categoryBike");

router.get("/category", categoryController.getCategory);
router.get("/category/:id", categoryController.getCategoryById);
router.post("/category", categoryController.addCategory);
router.patch("/category/:id", categoryController.updateCategory);
router.delete("/category/:id", categoryController.deleteCategory);

module.exports = router;
