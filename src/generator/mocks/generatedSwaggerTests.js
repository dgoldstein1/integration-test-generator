module.exports = {
  "delete/spaces/{id}": {
    PositiveTest: {
      name: "PositiveTest",
      success: undefined,
      test:
        'function() {    return api[\'del\'](\'endpoint + /spaces/Sfe\',{}).then(res => {      return Promise.resolve({        success: _.isEqual(res.data, {"deleted":"WRAaejCCfm","workspace":{"ID":"nbZT","version":"bIisrAKbZx","name":"UhucyO","description":"KaKryTaGrZU","acm":"C","creator":"QAfo","permission":{"create":{"allow":["qvlrTnhRgYw"]},"read":{"allow":["obHUluz"]},"update":{"allow":["UiUUmGuK"]},"delete":{"allow":["MLMBgN"]},"share":{"allow":["UyyNXZDsmdg"]}},"created":"zp","modified":"CvyTeVkb","image":"vy","discoverable":"nVTssY"}})      });    });  }'
    }
  },
  "get/listSpaces": {
    PositiveTest: {
      name: "PositiveTest",
      success: undefined,
      test:
        'function() {    return api[\'get\'](\'endpoint + /listSpaces\',{}).then(res => {      return Promise.resolve({        success: _.isEqual(res.data, {"count":"DYD","spaces":[{"ID":"YrTCZYEJ","name":"ALeXKpX","creator":"zcaIGtyGIwZ","created":"ugCwMNYmZ","numberOfMembers":"hDQgaXZVOk"}]})      });    });  }'
    }
  },
  "get/permission": {
    PositiveTest: {
      name: "PositiveTest",
      success: undefined,
      test:
        "function() {    return api['get']('endpoint + /permission',{}).then(res => {      return Promise.resolve({        success: _.isEqual(res.data, {\"iHavePermission\":true})      });    });  }"
    }
  },
  "get/spaces/{id}": {
    PositiveTest: {
      name: "PositiveTest",
      success: undefined,
      test:
        'function() {    return api[\'get\'](\'endpoint + /spaces/pl\',{}).then(res => {      return Promise.resolve({        success: _.isEqual(res.data, {"ID":"DqYzjuCsS","version":"j","name":"eruYZoDUgtY","description":"PKSpWhThSGb","acm":"rPqFTMrGwP","creator":"teLxgVTVWpe","permission":{"create":{"allow":["ewXPB"]},"read":{"allow":["LMREK"]},"update":{"allow":["nyaf"]},"delete":{"allow":["l"]},"share":{"allow":["hBosYByPNiB"]}},"created":"ZqRbn","modified":"YRJSmgu","image":"NVAwtkM","discoverable":"vAvwBEqA"})      });    });  }'
    }
  },
  "patch/spaces/{id}": {
    PositiveTest: {
      name: "PositiveTest",
      success: undefined,
      test:
        'function() {    return api[\'patch\'](\'endpoint + /spaces/CVtpvZmXRha\',{"ID":"bxiL","version":"Sent","name":"qlW","description":"ALtOqk","acm":"qQHv","creator":"ePDUJTRWc","permission":{"create":{"allow":["LbWPpp"]},"read":{"allow":["zewtyO"]},"update":{"allow":["LjiJcONWDd"]},"delete":{"allow":["kBOymyouMm"]},"share":{"allow":["yKxMWgJgoz"]}},"created":"lRiFMI","modified":"JJaJCqELHrP","image":"QIhoa","discoverable":"pYsDUqi"}).then(res => {      return Promise.resolve({        success: _.isEqual(res.data, {"ID":"Sd","version":"idVRMU","name":"Imi","description":"xvHwICCnFX","acm":"rApAMtKnzcK","creator":"wkLW","permission":{"create":{"allow":["QjMrnGO"]},"read":{"allow":["LKlbhNwmm"]},"update":{"allow":["PODzBdQwFCV"]},"delete":{"allow":["kPBneXf"]},"share":{"allow":["zQJxiT"]}},"created":"uGlMylUTaM","modified":"x","image":"MMzMwPKyDF","discoverable":"pvHtW"})      });    });  }'
    }
  },
  "post/spaces": {
    PositiveTest: {
      name: "PositiveTest",
      success: undefined,
      test:
        'function() {    return api[\'post\'](\'endpoint + /spaces\',{"ID":"TxnL","version":"NyEI","name":"MBCzfXPPzW","description":"eyCCpLBL","acm":"OTplCr","creator":"WfdRGTrJ","permission":{"create":{"allow":["AoN"]},"read":{"allow":["k"]},"update":{"allow":["Sg"]},"delete":{"allow":["ySVNzNmE"]},"share":{"allow":["devrnC"]}},"created":"iaQHAuAhw","modified":"rKuo","image":"SK","discoverable":"XOiXo"}).then(res => {      return Promise.resolve({        success: _.isEqual(res.data, {"ID":"vzpU","version":"SsvIcyestwU","name":"CAsShASUn","description":"yDjDiYbNErt","acm":"gJcHevQe","creator":"OJZQfBhUe","permission":{"create":{"allow":["itrbFvzCMI"]},"read":{"allow":["NMGdv"]},"update":{"allow":["hQqvQBBkK"]},"delete":{"allow":["SdwkNSyiK"]},"share":{"allow":["VPHaEDf"]}},"created":"hppMYk","modified":"BU","image":"z","discoverable":"gQUhdA"})      });    });  }'
    }
  }
};
