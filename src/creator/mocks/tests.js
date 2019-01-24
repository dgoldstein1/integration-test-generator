// tests.js

module.exports = {
  "get/examples/services/hello": {
    PositiveTest: {
      header: "header",
      name: "PositiveTest",
      test:
        "function() {    return api['get'](endpoint + '/examples/services/hello',{}).then(res => {      return Promise.resolve({        success: _.isEqual(res.data, {\"text\":\"cUGLc\"})      });    });  }"
    }
  }
};
