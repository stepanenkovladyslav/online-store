const { InstagramImages } = require("../models/models");
const ApiError = require("../error/ApiError");
const uuid = require("uuid");
const path = require("path");

class InstagramImageController {
	async create(req, res) {
		const { link } = req.body;
		const { img } = req.files;
		let fileName = uuid.v4() + ".jpg";
		img.mv(path.resolve(__dirname, "..", "static", fileName));
		const images = await InstagramImages.create({
			link: link,
			img: fileName,
		});
		return res.json(images);
	}

	async getAll(req, res) {
		const images = await InstagramImages.findAll();
		return res.json(images);
	}
}

module.exports = new InstagramImageController();
