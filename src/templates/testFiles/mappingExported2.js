// mapping.js
import { deletespacesidPositiveTest } from "./deletespacesidPositiveTest";
import { getlistSpacesPositiveTest } from "./getlistSpacesPositiveTest";
import { getpermissionPositiveTest } from "./getpermissionPositiveTest";
import { getspacesidPositiveTest } from "./getspacesidPositiveTest";
import { patchspacesidPositiveTest } from "./patchspacesidPositiveTest";
import { postspacesPositiveTest } from "./postspacesPositiveTest";

export default {
  "delete/spaces/{id}": {
    deletespacesidPositiveTest: {
      name: "PositiveTest",
      ID: "deletespacesidPositiveTest",
      test: deletespacesidPositiveTest
    }
  },
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
  "get/spaces/{id}": {
    getspacesidPositiveTest: {
      name: "PositiveTest",
      ID: "getspacesidPositiveTest",
      test: getspacesidPositiveTest
    }
  },
  "patch/spaces/{id}": {
    patchspacesidPositiveTest: {
      name: "PositiveTest",
      ID: "patchspacesidPositiveTest",
      test: patchspacesidPositiveTest
    }
  },
  "post/spaces": {
    postspacesPositiveTest: {
      name: "PositiveTest",
      ID: "postspacesPositiveTest",
      test: postspacesPositiveTest
    }
  }
};
