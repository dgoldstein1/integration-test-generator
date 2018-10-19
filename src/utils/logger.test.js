// logger.test.js

const logger = require("./logger");

describe("logger", () => {
  describe("log", () => {
    it("logs out info", () => {
      let t = logger.log("test", "INFO");
      let expectedResult = "INFO : test";
      expect(t).toEqual(expectedResult);
    });
    it("logs out error", () => {
      let t = logger.log("test", "ERROR");
      let expectedResult = "ERROR : test";
      expect(t).toEqual(expectedResult);
    });
    it("logs stringified object if json is passed", () => {
      let object = { test: "test" };
      let t = logger.log(object, "ERROR");
      let expectedResult = "ERROR : " + JSON.stringify(object, null, 2);
      expect(t).toEqual(expectedResult);
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
