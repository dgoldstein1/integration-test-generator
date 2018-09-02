import api from "../api/api";
import endpoint from "../definitions/endpoint";

export default function() {
  return api["get"](endpoint + "/examples/services/hello", {}).then(res => {
    return Promise.resolve({ success: _.isEqual(res.data, { text: cUGLc }) });
  });
}
