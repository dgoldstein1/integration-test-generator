module.exports = {
  test: function() {
    return api[method.toLowerCase()](endpoint + path, requestBody);
  }
};
