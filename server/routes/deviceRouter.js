const Router = require("express");
const router = new Router();
const deviceController = require("../controllers/deviceController");

router.post("/", deviceController.create);
router.get("/", deviceController.getAll);
router.get("/:id", deviceController.getOne);
router.put("/", deviceController.changeName);
router.put("/changePrice", deviceController.changePrice);
router.put("/changeRating", deviceController.changeRating);
router.put("/changeTypeId", deviceController.changeTypeId);
router.put("/changeBrandId", deviceController.changeBrandId);
router.put("/addPhoto", deviceController.addDevicePhotos);

module.exports = router;
