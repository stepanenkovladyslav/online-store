const { AnimeLogos } = require("../models/models");
const uuid = require("uuid");
const path = require("path");

class AnimeLogosController {
	async create(req, res) {
		const { link } = req.body;
		const { img } = req.files;
		let fileName = uuid.v4() + ".jpg";
		img.mv(path.resolve(__dirname, "..", "static", fileName));
		const images = await AnimeLogos.create({ link, img: fileName });
		return res.json(images);
	}

	async getAll(req, res) {
		const images = await AnimeLogos.findAll();
		return res.json(images);
	}
}

module.exports = new AnimeLogosController();
