// mapping.js
import { getlistSpacesPositiveTest } from "./getlistSpacesPositiveTest";
import { getpermissionPositiveTest } from "./getpermissionPositiveTest";
import { postspacesPositiveTest } from "./postspacesPositiveTest";
import { getspacesidPositiveTest } from "./getspacesidPositiveTest";
import { deletespacesidPositiveTest } from "./deletespacesidPositiveTest";
import { patchspacesidPositiveTest } from "./patchspacesidPositiveTest";

export default {
  "get/listSpaces": {
    getlistSpacesPositiveTest: {
      name: "PositiveTest",
      ID: "getlistSpacesPositiveTest",
      test: getlistSpacesPositiveTest
    }
  },
  "get/permission": {
    getpermissionPositiveTest: {
      name: "PositiveTest",
      ID: "getpermissionPositiveTest",
      test: getpermissionPositiveTest
    }
  },
  "post/spaces": {
    postspacesPositiveTest: {
      name: "PositiveTest",
      ID: "postspacesPositiveTest",
      test: postspacesPositiveTest
    }
  },
  "get/spaces/{id}": {
    getspacesidPositiveTest: {
      name: "PositiveTest",
      ID: "getspacesidPositiveTest",
      test: getspacesidPositiveTest
    }
  },
  "delete/spaces/{id}": {
    deletespacesidPositiveTest: {
      name: "PositiveTest",
      ID: "deletespacesidPositiveTest",
      test: deletespacesidPositiveTest
    }
  },
  "patch/spaces/{id}": {
    patchspacesidPositiveTest: {
      name: "PositiveTest",
      ID: "patchspacesidPositiveTest",
      test: patchspacesidPositiveTest
    }
  }
};
