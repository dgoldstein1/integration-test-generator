// replace code here
header;
// method run during testing
let getexamplesserviceshelloPositiveTest = function() {
  return api["get"](endpoint + "/examples/services/hello", {}).then(res => {
    return Promise.resolve({ success: _.isEqual(res.data, { text: cUGLc }) });
  });
};
// footer, configured this way for testing
export {
  getexamplesserviceshelloPositiveTest,
  method,
  requestBody,
  expectedOutput,
  path
};
