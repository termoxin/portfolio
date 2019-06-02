// Dependencies
const helpers = require("./helpers");
const _api = require("./api/");
const path = require("path");

// Handlers initialization
let handlers = { ..._api };

handlers.public = (data, callback) => {
  const pathname = data.address.pathname;
  let fileName = "";

  if(pathname.indexOf("/public") > -1) {
    const pathToStatic = path.join(__dirname, "../public");
    const file = pathname.replace("/public", "");

    fileName = pathToStatic + file;
  }

  if(pathname.indexOf("/static") > -1) {
    const pathToStatic = path.join(__dirname, "../client/build/static");
    const file = pathname.replace("/static", "");

    fileName = pathToStatic + file;
  }

  if(pathname.indexOf("/css") > -1 && pathname.indexOf("/static")) {
    const pathToStatic = path.join(__dirname, "../client/build", "css");
    const file = pathname.replace("/css", "");

    fileName = pathToStatic + file;
  }

  helpers.getAssetsData(fileName, (err, assetsData, contentType) => {
    if (!err && assetsData && contentType) {
      callback(200, assetsData, contentType);
    } else {
      callback(404, err, contentType);
    }
  });
};

handlers.uploadFile = (data, callback) => {
  callback(200, data.body);
};

module.exports = handlers;
