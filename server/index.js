require("dotenv").config();
const express = require("express");
const sequelize = require("./db");
const models = require("./models/models");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const router = require("./routes/index");
const errorHandler = require("./middleware/ErrorHandlingMiddleware");
const path = require("path");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
// serving built front end code
app.use(express.static(path.resolve(__dirname, "public")));
// serving images from db
app.use(express.static(path.resolve(__dirname, "img")));
app.use(fileUpload({}));
app.use("/api", router);
app.get('*', (req, res) => {
  return res.sendFile(path.join(__dirname, 'public', "index.html" ));
})

app.use(errorHandler);

const start = async () => {
	try {
		await sequelize.authenticate();
		await sequelize.sync();
		app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
	} catch (e) {
		console.log(e);
	}
};

start();
