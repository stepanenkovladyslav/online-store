const uuid = require("uuid");
const path = require("path");
const { Device, DeviceInfo, DevicePhotos } = require("../models/models");
const ApiError = require("../error/ApiError");

class DeviceController {
	async create(req, res, next) {
		try {
			let { name, price, brandId, typeId, info } = req.body;
			const { pictures } = req.files;
			let fileName = uuid.v4() + ".jpg";
			pictures.length > 1
				? pictures[0].mv(
						path.resolve(__dirname, "..", "static", fileName)
				  )
				: pictures.mv(
						path.resolve(__dirname, "..", "static", fileName)
				  );

			const device = await Device.create({
				name,
				price,
				brandId,
				typeId,
				img: fileName,
			});

			if (info) {
				info = JSON.parse(info);
				info.forEach((i) =>
					DeviceInfo.create({
						description: i,
						deviceId: device.id,
					})
				);
			}
			if (pictures.length > 1) {
				pictures.forEach((picture) => {
					let fileName = uuid.v4() + ".jpg";
					picture.mv(
						path.resolve(__dirname, "..", "static", fileName)
					);
					DevicePhotos.create({
						img: fileName,
						deviceId: device.id,
					});
				});
			}
			return res.json(device);
		} catch (e) {
			console.log(e.message);
			next(ApiError.badRequest(e.message));
		}
	}

	async getAll(req, res) {
		let { brandId, typeId, limit, page } = req.query;
		page = +page || 1;
		limit = +limit || 50;
		let offset = page * limit - limit;
		let devices;
		if (!brandId && !typeId) {
			devices = await Device.findAndCountAll({ limit, offset });
		}
		if (brandId && !typeId) {
			devices = await Device.findAndCountAll({
				where: { brandId },
				limit,
				offset,
			});
		}
		if (!brandId && typeId) {
			devices = await Device.findAndCountAll({
				where: { typeId },
				limit,
				offset,
			});
		}
		if (brandId && typeId) {
			devices = await Device.findAndCountAll({
				where: { typeId, brandId },
				limit,
				offset,
			});
		}
		return res.json(devices);
	}

	async getOne(req, res) {
		const { id } = req.params;
		const device = await Device.findOne({
			where: { id },
			include: [
				{ model: DeviceInfo, as: "info" },
				{ model: DevicePhotos, as: "device_photos" },
			],
		});
		if (device === null) {
			return [{}];
		} else {
			return res.json(device);
		}
	}

	async changeName(req, res) {
		const { name, newName } = req.body;
		await Device.update({ name: newName }, { where: { name } });
		const device = await Device.findOne({ where: { name: newName } });
		return res.json(device);
	}

	async changePrice(req, res) {
		const { id, price, newPrice } = req.body;
		await Device.update({ price: newPrice }, { where: { id } });
		const device = await Device.findOne({
			where: { price: newPrice },
		});
		return res.json(device);
	}

	async changeRating(req, res) {
		const { id, newRating } = req.body;
		await Device.update({ rating: newRating }, { where: { id } });
		const device = await Device.findOne({ where: { rating: newRating } });
		return res.json(device);
	}

	async changeTypeId(req, res) {
		const { typeId, newTypeId } = req.body;
		await Device.update({ typeId: newTypeId }, { where: { typeId } });
		const device = await Device.findOne({ where: { typeId: newTypeId } });
		return res.json(device);
	}

	async changeBrandId(req, res) {
		const { brandId, newBrandId } = req.body;
		await Device.update({ brandId: newBrandId }, { where: { brandId } });
		const device = await Device.findOne({ where: { brandId: newBrandId } });
		return res.json(device);
	}

	async addDevicePhotos(req, res) {
		const { deviceId } = req.body;
		const { photo } = req.files;
		let fileName = uuid.v4() + ".jpg";
		photo.mv(path.resolve(__dirname, "..", "static", fileName));
		DevicePhotos.create({
			img: fileName,
			deviceId: deviceId,
		});
		return res.json(DevicePhotos);
	}
}

module.exports = new DeviceController();
