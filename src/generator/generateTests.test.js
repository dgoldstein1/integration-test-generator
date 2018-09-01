// generateTests.test.js

const generateTests = require("./generateTests");
const swaggerRequestMock = require("./mocks/swaggerRequests");
const swaggerResponseMock = require("./mocks/swaggerResponses");
const generatedTests = require("./mocks/generatedSwaggerTests");

describe("generateTests", () => {
  describe("generateAll", () => {
    it("temp", () => {
      expect(true);
    });
  });
  describe("generateTests", () => {
    it("generates correct test object", () => {
      let tests = generateTests.generateTests(
        swaggerRequestMock,
        swaggerResponseMock,
        "/this/is/an/endpoint"
      );
      expect(tests.error).toBeUndefined();
      expect(tests).toEqual(generatedTests);
    });
  });
  describe("generateTestObject", () => {
    it("throws error if the type of method is not supported", () => {
      expect(
        generateTests.generateTestObject(undefined, undefined, "bad_method")
      ).toEqual({ error: "Method bad_method is not supported" });
    });
    it("generates a valid test object for get", () => {
      let sampleRequest = {
        request: {
          query: "q=zEuGgVuq&offset=vq&perPage=tZKeJkKl&iHavePermission=NPIz",
          pathname: "/listSpaces",
          path:
            "/listSpaces?q=zEuGgVuq&offset=vq&perPage=tZKeJkKl&iHavePermission=NPIz"
        }
      };
      let sampleResponse = {
        responses: {
          "200": {
            count: "DYD",
            spaces: [
              {
                ID: "YrTCZYEJ",
                name: "ALeXKpX",
                creator: "zcaIGtyGIwZ",
                created: "ugCwMNYmZ",
                numberOfMembers: "hDQgaXZVOk"
              }
            ]
          }
        }
      };
      let test = generateTests.generateTestObject(
        sampleRequest,
        sampleResponse,
        "get"
      );
      expect(test.error).toBeUndefined();
      for (let i in test.testObject) {
        expect(test.testObject[i]).not.toBeUndefined();
        expect(test.testObject[i].success).toBeUndefined();
        expect(test.testObject[i].name).toEqual(i);
        expect(test.testObject[i].test).not.toBeUndefined();
      }
    });
    it("generates valid test object for post", () => {
      let sampleRequest = {
        request: {
          body: {
            ID: "TxnL",
            version: "NyEI",
            name: "MBCzfXPPzW",
            description: "eyCCpLBL",
            acm: "OTplCr",
            creator: "WfdRGTrJ",
            permission: {
              create: {
                allow: ["AoN"]
              },
              read: {
                allow: ["k"]
              },
              update: {
                allow: ["Sg"]
              },
              delete: {
                allow: ["ySVNzNmE"]
              },
              share: {
                allow: ["devrnC"]
              }
            },
            created: "iaQHAuAhw",
            modified: "rKuo",
            image: "SK",
            discoverable: "XOiXo"
          },
          pathname: "/spaces",
          path: "/spaces"
        }
      };
      let sampleResponse = {
        responses: {
          "200": {
            ID: "vzpU",
            version: "SsvIcyestwU",
            name: "CAsShASUn",
            description: "yDjDiYbNErt",
            acm: "gJcHevQe",
            creator: "OJZQfBhUe",
            permission: {
              create: {
                allow: ["itrbFvzCMI"]
              },
              read: {
                allow: ["NMGdv"]
              },
              update: {
                allow: ["hQqvQBBkK"]
              },
              delete: {
                allow: ["SdwkNSyiK"]
              },
              share: {
                allow: ["VPHaEDf"]
              }
            },
            created: "hppMYk",
            modified: "BU",
            image: "z",
            discoverable: "gQUhdA"
          }
        }
      };
      let test = generateTests.generateTestObject(
        sampleRequest,
        sampleResponse,
        "post"
      );
      expect(test.error).toBeUndefined();
      for (let i in test.testObject) {
        expect(test.testObject[i]).not.toBeUndefined();
        expect(test.testObject[i].success).toBeUndefined();
        expect(test.testObject[i].name).toEqual(i);
        expect(test.testObject[i].test).not.toBeUndefined();
      }
    });
  });
});
