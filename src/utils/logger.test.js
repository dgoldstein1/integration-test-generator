// logger.test.js

const logger = require("./logger");

describe("logger", () => {
  describe.skip("log", () => {
    beforeEach(() => {
      console.log = jest.fn();
    });
    it("logs out info", () => {
      logger.log("test", "INFO");
      expect(console.log.mock.calls[0]).toEqual(["INFO : test"]);
    });
    it("logs out error", () => {
      logger.log("test", "ERROR");
      expect(console.log.mock.calls[0]).toEqual(["ERROR : test"]);
    });
    it("logs stringified object if json is passed", () => {
      let object = { test: "test" };
      logger.log(object, "ERROR");
      expect(console.log.mock.calls[0]).toEqual([
        `ERROR : ${JSON.stringify(object, null, 2)}`
      ]);
    });
  });
  describe("logAndExitOnError", () => {
    it("does not exit if error code is zero", () => {
      logger.logAndExitOnError("test", undefined);
      expect(true);
    });
    it("exits on error", () => {
      const mockExit = jest.fn();
      setProperty(process, "exit", mockExit);

      logger.logAndExitOnError("test", 1);
      expect(mockExit).toHaveBeenCalledWith(1);
    });
  });
});

const setProperty = (object, property, value) => {
  const originalProperty = Object.getOwnPropertyDescriptor(object, property);
  Object.defineProperty(object, property, { value });
  return originalProperty;
};
