const Router = require("express");
const router = new Router();
const typeController = require("../controllers/typeController");
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/", typeController.create);
router.get("/", typeController.getAll);
router.get("/:id", typeController.getOne);
router.delete("/", typeController.removeType);
router.put("/changeName", typeController.change);

module.exports = router;
