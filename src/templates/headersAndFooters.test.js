// headersAndFooters.test.js

const headersAndFooters = require("./headersAndFooters");

describe("templates", () => {
  describe("headers and footers", () => {
    expect(headersAndFooters).not.toBeUndefined();
    let method = "post";
    let sampleRequest = {
      request: {
        query: "q=zEuGgVuq&offset=vq&perPage=tZKeJkKl&iHavePermission=NPIz",
        pathname: "/listSpaces",
        path:
          "/listSpaces?q=zEuGgVuq&offset=vq&perPage=tZKeJkKl&iHavePermission=NPIz"
      }
    };
    it("creates header", () => {
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

      expect(
        headersAndFooters.createHeader(sampleRequest, sampleResponse, method)
      ).toContain("import api from '../api/api'");
      expect(
        headersAndFooters.createHeader(sampleRequest, sampleResponse, method)
      ).toContain("import endpoint from '../definitions/endpoint';");
      expect(
        headersAndFooters.createHeader(sampleRequest, sampleResponse, method)
      ).toContain("import _ from 'lodash';");
      expect(
        headersAndFooters.createHeader(sampleRequest, sampleResponse, method)
      ).toContain("let params = {};");
      expect(
        headersAndFooters.createHeader(sampleRequest, sampleResponse, method)
      ).toContain("let path = '/listSpaces' + api.paramsToUri(params);");
      expect(
        headersAndFooters.createHeader(sampleRequest, sampleResponse, method)
      ).toContain("let requestBody = {};");
      expect(
        headersAndFooters.createHeader(sampleRequest, sampleResponse, method)
      ).toContain("let method = 'POST';");
      expect(
        headersAndFooters.createHeader(sampleRequest, sampleResponse, method)
      ).toContain(
        `let expectedOutput = {'count':'DYD','spaces':[{'ID':'YrTCZYEJ','name':'ALeXKpX','creator':'zcaIGtyGIwZ','created':'ugCwMNYmZ','numberOfMembers':'hDQgaXZVOk'}]};`
      );
    });
  });
});
