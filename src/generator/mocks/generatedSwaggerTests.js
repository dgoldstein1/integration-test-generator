module.exports = {
  "get/listSpaces": {
    testObject: {
      PositiveTest: {
        name: "PositiveTest",
        test:
          'function () {\n    return api[method](endpoint + sampleRequest.path, sampleRequest.request.body).then(res => {\n      return Promise.resolve({\n        success: _.isEqual(res.data, sampleResponse.responses["200"])\n      });\n    });\n  }'
      }
    }
  },
  "get/permission": {
    testObject: {
      PositiveTest: {
        name: "PositiveTest",
        test:
          'function () {\n    return api[method](endpoint + sampleRequest.path, sampleRequest.request.body).then(res => {\n      return Promise.resolve({\n        success: _.isEqual(res.data, sampleResponse.responses["200"])\n      });\n    });\n  }'
      }
    }
  },
  "post/spaces": {
    testObject: {
      PositiveTest: {
        name: "PositiveTest",
        test:
          'function () {\n    return api[method](endpoint + sampleRequest.path, sampleRequest.request.body).then(res => {\n      return Promise.resolve({\n        success: _.isEqual(res.data, sampleResponse.responses["200"])\n      });\n    });\n  }'
      }
    }
  },
  "get/spaces/{id}": {
    testObject: {
      PositiveTest: {
        name: "PositiveTest",
        test:
          'function () {\n    return api[method](endpoint + sampleRequest.path, sampleRequest.request.body).then(res => {\n      return Promise.resolve({\n        success: _.isEqual(res.data, sampleResponse.responses["200"])\n      });\n    });\n  }'
      }
    }
  },
  "delete/spaces/{id}": {
    testObject: {
      PositiveTest: {
        name: "PositiveTest",
        test:
          'function () {\n    return api[method](endpoint + sampleRequest.path, sampleRequest.request.body).then(res => {\n      return Promise.resolve({\n        success: _.isEqual(res.data, sampleResponse.responses["200"])\n      });\n    });\n  }'
      }
    }
  },
  "patch/spaces/{id}": {
    testObject: {
      PositiveTest: {
        name: "PositiveTest",
        test:
          'function () {\n    return api[method](endpoint + sampleRequest.path, sampleRequest.request.body).then(res => {\n      return Promise.resolve({\n        success: _.isEqual(res.data, sampleResponse.responses["200"])\n      });\n    });\n  }'
      }
    }
  }
};
