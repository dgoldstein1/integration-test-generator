// swaggerResponses.js

module.exports = {
  "/listSpaces": {
    get: {
      responses: {
        "200": {
          count: "DYD",
          spaces: [
            {
              ID: "YrTCZYEJ",
              name: "ALeXKpX",
              creator: "zcaIGtyGIwZ",
              created: "ugCwMNYmZ",
              numberOfMembers: "hDQgaXZVOk"
            }
          ]
        }
      }
    }
  },
  "/permission": {
    get: {
      responses: {
        "200": {
          iHavePermission: true
        }
      }
    }
  },
  "/spaces": {
    post: {
      responses: {
        "200": {
          ID: "vzpU",
          version: "SsvIcyestwU",
          name: "CAsShASUn",
          description: "yDjDiYbNErt",
          acm: "gJcHevQe",
          creator: "OJZQfBhUe",
          permission: {
            create: {
              allow: ["itrbFvzCMI"]
            },
            read: {
              allow: ["NMGdv"]
            },
            update: {
              allow: ["hQqvQBBkK"]
            },
            delete: {
              allow: ["SdwkNSyiK"]
            },
            share: {
              allow: ["VPHaEDf"]
            }
          },
          created: "hppMYk",
          modified: "BU",
          image: "z",
          discoverable: "gQUhdA"
        }
      }
    }
  },
  "/spaces/{id}": {
    get: {
      responses: {
        "200": {
          ID: "DqYzjuCsS",
          version: "j",
          name: "eruYZoDUgtY",
          description: "PKSpWhThSGb",
          acm: "rPqFTMrGwP",
          creator: "teLxgVTVWpe",
          permission: {
            create: {
              allow: ["ewXPB"]
            },
            read: {
              allow: ["LMREK"]
            },
            update: {
              allow: ["nyaf"]
            },
            delete: {
              allow: ["l"]
            },
            share: {
              allow: ["hBosYByPNiB"]
            }
          },
          created: "ZqRbn",
          modified: "YRJSmgu",
          image: "NVAwtkM",
          discoverable: "vAvwBEqA"
        }
      }
    },
    delete: {
      responses: {
        "200": {
          deleted: "WRAaejCCfm",
          workspace: {
            ID: "nbZT",
            version: "bIisrAKbZx",
            name: "UhucyO",
            description: "KaKryTaGrZU",
            acm: "C",
            creator: "QAfo",
            permission: {
              create: {
                allow: ["qvlrTnhRgYw"]
              },
              read: {
                allow: ["obHUluz"]
              },
              update: {
                allow: ["UiUUmGuK"]
              },
              delete: {
                allow: ["MLMBgN"]
              },
              share: {
                allow: ["UyyNXZDsmdg"]
              }
            },
            created: "zp",
            modified: "CvyTeVkb",
            image: "vy",
            discoverable: "nVTssY"
          }
        }
      }
    },
    patch: {
      responses: {
        "200": {
          ID: "Sd",
          version: "idVRMU",
          name: "Imi",
          description: "xvHwICCnFX",
          acm: "rApAMtKnzcK",
          creator: "wkLW",
          permission: {
            create: {
              allow: ["QjMrnGO"]
            },
            read: {
              allow: ["LKlbhNwmm"]
            },
            update: {
              allow: ["PODzBdQwFCV"]
            },
            delete: {
              allow: ["kPBneXf"]
            },
            share: {
              allow: ["zQJxiT"]
            }
          },
          created: "uGlMylUTaM",
          modified: "x",
          image: "MMzMwPKyDF",
          discoverable: "pvHtW"
        }
      }
    }
  }
};
