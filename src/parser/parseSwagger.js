// parseSwagger.js

var fs = require("fs");
var SwaggerParser = require("swagger-parser");

/**
 * @param {string} file URL (e.g. process.env.ROOT_DIR + "/src/parser/mocks/goodSwagger.json")
 * @return {JSON} formatted {err : "string error", api : successfully parsed swagger api }
 **/
let parseSwagger = (filePath, callback) => {
  // read in file
  var content;
  try {
    content = fs.readFileSync(filePath, "utf8");
  } catch (e) {
    callback({ err: e.message });
  }
  if (!content) callback({ err: "Could not read in file " + filePath });

  // validate json
  try {
    content = JSON.parse(content);
  } catch (e) {
    callback({ err: e.message });
  }

  // validate json as swagger definition
  SwaggerParser.validate(content, (err, api) => {
    if (err) {
      err = err.message;
    }
    callback({ err, api });
  });
};

module.exports = {
  parseSwagger
};
