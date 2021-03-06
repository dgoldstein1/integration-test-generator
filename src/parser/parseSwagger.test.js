// parseSwagger.test.js

const parseSwagger = require("./parseSwagger");

describe("parseSwagger", () => {
  describe("parseSwagger", () => {
    it("validates a good swagger file", done => {
      function callback(res) {
        expect(res.api).not.toBeUndefined();
        expect(res.err).toBeNull();
        done();
      }

      console.log(process.env.ROOT_DIR);

      parseSwagger.parseSwagger(
        process.env.ROOT_DIR + "/src/parser/mocks/goodSwagger.json",
        callback
      );
    });
    it("throws error on bad swagger file", done => {
      function callback(res) {
        expect(res.api).toBeUndefined();
        expect(res.err).not.toBeNull();
        expect(typeof res.err).toBe("string");
        done();
      }

      parseSwagger.parseSwagger(
        process.env.ROOT_DIR + "/src/parser/mocks/badSwagger.json",
        callback
      );
    });
    it("throws error when reading is non existant file", done => {
      function callback(res) {
        expect(res.api).toBeUndefined();
        expect(res.err).not.toBeNull();
        expect(typeof res.err).toBe("string");
        done();
      }

      parseSwagger.parseSwagger("this is a bad filepath!!", callback);
    });
  });
});
