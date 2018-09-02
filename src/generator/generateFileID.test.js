// generateFileID.test.js

var generateFileID = require("./generateFileID");

describe("generators", () => {
  describe("generateFileID", () => {
    it("generates valid ID", () => {
      expect(generateFileID("/get/this/is/a/url", "negativetests")).toEqual(
        "getthisisaurlnegativetests"
      );
    });
    it("removes any white space", () => {
      expect(
        generateFileID("/get/this/is/a/d a a fadfurl", "neg  af ative  tests")
      ).toEqual("getthisisadaafadfurlnegafativetests");
    });
  });
});
