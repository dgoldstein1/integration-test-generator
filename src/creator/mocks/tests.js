// tests.js

module.exports = {
  "get/examples/services/hello": {
    testObject: {
      PositiveTest: {
        name: "PositiveTest",
        test:
          "function() {    return api['get']('ENDPOINT/examples/services/hello',{}).then(res => {      return Promise.resolve({        success: _.isEqual(res.data, {\"text\":\"cUGLc\"})      });    });  }"
      }
    }
  }
};
