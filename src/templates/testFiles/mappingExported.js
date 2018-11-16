// mapping.js
import { getexamplesserviceshelloPositiveTest } from "./getexamplesserviceshelloPositiveTest";
import { getexamplesserviceshelloNegativeTest } from "./getexamplesserviceshelloNegativeTest";

export default {
  "get/examples/services/hello": {
    getexamplesserviceshelloPositiveTest: {
      name: "PositiveTest",
      ID: "getexamplesserviceshelloPositiveTest",
      test: getexamplesserviceshelloPositiveTest
    },
    getexamplesserviceshelloNegativeTest: {
      name: "NegativeTest",
      ID: "getexamplesserviceshelloNegativeTest",
      test: getexamplesserviceshelloNegativeTest
    }
  }
};
