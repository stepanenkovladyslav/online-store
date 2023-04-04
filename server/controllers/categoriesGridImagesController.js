const ApiError = require("../error/ApiError");
const uuid = require("uuid");
const path = require("path");
const { CategoriesGridImages } = require("../models/models");

class CategoriesGridImagesController {
	async create(req, res) {
		const { imgLink, headingText } = req.body;

		const { img } = req.files;
		let fileName = uuid.v4() + ".jpg";
		img.mv(path.resolve(__dirname, "..", "static", fileName));
		const images = await CategoriesGridImages.create({
			imgLink: imgLink,
			headingText: headingText,
			img: fileName,
		});
		return res.json(images);
	}
	async getAll(req, res) {
		const images = await CategoriesGridImages.findAll();
		return res.json(images);
	}
}

module.exports = new CategoriesGridImagesController();
