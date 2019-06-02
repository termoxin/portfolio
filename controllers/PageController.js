// Dependencies

const helpers = require("../libs/helpers");
const Page = require("../models/Page");
const path = require("path");
const fs = require("fs");

let PageController = {};

PageController.index = (data, callback) => {
	const page = fs.readFile(path.join(__dirname, "../client/build", "index.html"), (err, data) => {
		callback(200, data, "html");
	});
};

module.exports = PageController;
