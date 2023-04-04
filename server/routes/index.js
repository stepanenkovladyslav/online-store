const Router = require("express");
const router = new Router();
const deviceRouter = require("./deviceRouter");
const userRouter = require("./userRouter");
const brandRouter = require("./brandRouter");
const typeRouter = require("./typeRouter");
const instagramImagesRouter = require("./instagramImagesRouter");
const animeLogosRouter = require("./animeLogosRouter");
const categoriesGridImagesRouter = require("./categoriesGridImagesRouter");
router.use("/user", userRouter);
router.use("/type", typeRouter);
router.use("/brand", brandRouter);
router.use("/device", deviceRouter);
router.use("/instImg", instagramImagesRouter);
router.use("/animeLogo", animeLogosRouter);
router.use("/categoriesGrid", categoriesGridImagesRouter);

module.exports = router;
