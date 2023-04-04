const Router = require("express");
const router = new Router();
const CategoriesGridImagesController = require("../controllers/categoriesGridImagesController.js");

router.post("/create", CategoriesGridImagesController.create);
router.get("/", CategoriesGridImagesController.getAll);

module.exports = router;
