const Router = require("express");
const animeLogosController = require("../controllers/animeLogosController");
const router = new Router();

router.post("/", animeLogosController.create);
router.get("/", animeLogosController.getAll);

module.exports = router;
