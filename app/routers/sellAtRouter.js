const router = require("express").Router();
const sellAtController = require("../controller/sellAtController");
const { uploadImages, validateImagesUpload } = require('../middleware/imageUpload');

router.get("/sell", sellAtController.getSell);
router.get("/sell/:id", sellAtController.getSellById);
// router.post("/sell", sellAtController.addSell);
router.post("/sell", uploadImages, validateImagesUpload, sellAtController.addSell);
router.patch("/sell/:id", sellAtController.updateSell);
router.delete("/sell/:id", sellAtController.deleteSell);

module.exports = router;
