const Router = require("express");
const router = new Router();
const InstagramImageController = require("../controllers/instagramImagesController.js");

router.post("/", InstagramImageController.create);
router.get("/", InstagramImageController.getAll);

module.exports = router;
