// generateFileID.js

// helper for creating file IDs
module.exports = function(endpoint, test) {
  return `${endpoint}${test}`.replace(/\//g, "").replace(/\s/g, "");
};
