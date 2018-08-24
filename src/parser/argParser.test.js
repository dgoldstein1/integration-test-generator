// argParser.test.js

const argParser = require("./argParser");

describe("argParser", () => {
  describe("createParser", () => {
    it("is invoked withouth errors", () => {
      let parser = argParser.createParser();
      expect(parser).not.toBeUndefined();
    });
  });
});
