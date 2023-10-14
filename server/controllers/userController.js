const ApiError = require("../error/ApiError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User, Basket } = require("../models/models");

const generateJwt = (id, email, role) => {
  return jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });
};

class UserController {
  async registration(req, res, next) {
    const { email, password, role } = req.body;
    if (!email || !password) {
      return next(ApiError(401, "Incorrect email or password"));
    }
    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
      return next(
        ApiError.badRequest("User with this email already exists")
      );
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({
      email,
      role,
      password: hashPassword,
    });
    const basket = await Basket.create({ userId: user.id });
    const token = generateJwt(user.id, user.email, user.role);
    return res.json({ token });
  }

  async getAll(req, res, next) {
    const users = await User.findAll();
    return res.json(users);
  }

  async login(req, res, next) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return next(ApiError(404, "User is not found"));
    }
    let comparePassword = bcrypt.compare(password, user.password);
    if (!comparePassword) {
      return next(ApiError(401, "Wrong password"));
    }
    const token = generateJwt(user.id, user.email, user.role);
    return res.json({ token });
  }

  async check(req, res, next) {
    const token = generateJwt(req.user.id, req.user.email, req.user.role);
    return res.json({ token });
  }

  async changeEmail(req, res) {
    const { email, newEmail } = req.body;
    await User.update({ email: newEmail }, { where: { email } });
    const user = await User.findOne({ where: { email: newEmail } });
    return res.json(user);
  }

  async changeRole(req, res) {
    const { email, newRole } = req.body;
    await User.update({ role: newRole }, { where: { email } });
    const user = await User.findOne({ where: { email } });
    console.log(user);
    return res.json(user);
  }
}

module.exports = new UserController();
