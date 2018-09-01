// swaggerRequests.js

module.exports = {
  "/listSpaces": {
    get: {
      request: {
        query: "q=zEuGgVuq&offset=vq&perPage=tZKeJkKl&iHavePermission=NPIz",
        pathname: "/listSpaces",
        path:
          "/listSpaces?q=zEuGgVuq&offset=vq&perPage=tZKeJkKl&iHavePermission=NPIz"
      }
    }
  },
  "/permission": {
    get: {
      request: {
        query: "id=gZzT&type=H",
        pathname: "/permission",
        path: "/permission?id=gZzT&type=H"
      }
    }
  },
  "/spaces": {
    post: {
      request: {
        body: {
          ID: "TxnL",
          version: "NyEI",
          name: "MBCzfXPPzW",
          description: "eyCCpLBL",
          acm: "OTplCr",
          creator: "WfdRGTrJ",
          permission: {
            create: {
              allow: ["AoN"]
            },
            read: {
              allow: ["k"]
            },
            update: {
              allow: ["Sg"]
            },
            delete: {
              allow: ["ySVNzNmE"]
            },
            share: {
              allow: ["devrnC"]
            }
          },
          created: "iaQHAuAhw",
          modified: "rKuo",
          image: "SK",
          discoverable: "XOiXo"
        },
        pathname: "/spaces",
        path: "/spaces"
      }
    }
  },
  "/spaces/{id}": {
    get: {
      request: {
        query:
          "workspace.ID=ffSLMRnrOka&workspace.version=dr&workspace.name=neIAEA&workspace.description=BFssC&workspace.acm=RBgniZ&workspace.creator=YhijxOLWJpB&workspace.permission.create.allow=mg&workspace.permission.read.allow=HmHnGZfy&workspace.permission.update.allow=TNBplAh&workspace.permission.delete.allow=vnaNUQxoK&workspace.permission.share.allow=Ddxq&workspace.created=dAH&workspace.modified=cXOrXiOvEN&workspace.image=rebaJTeo&workspace.discoverable=SJ",
        pathname: "/spaces/pl",
        path:
          "/spaces/pl?workspace.ID=ffSLMRnrOka&workspace.version=dr&workspace.name=neIAEA&workspace.description=BFssC&workspace.acm=RBgniZ&workspace.creator=YhijxOLWJpB&workspace.permission.create.allow=mg&workspace.permission.read.allow=HmHnGZfy&workspace.permission.update.allow=TNBplAh&workspace.permission.delete.allow=vnaNUQxoK&workspace.permission.share.allow=Ddxq&workspace.created=dAH&workspace.modified=cXOrXiOvEN&workspace.image=rebaJTeo&workspace.discoverable=SJ"
      }
    },
    delete: {
      request: {
        pathname: "/spaces/Sfe",
        path: "/spaces/Sfe"
      }
    },
    patch: {
      request: {
        body: {
          ID: "bxiL",
          version: "Sent",
          name: "qlW",
          description: "ALtOqk",
          acm: "qQHv",
          creator: "ePDUJTRWc",
          permission: {
            create: {
              allow: ["LbWPpp"]
            },
            read: {
              allow: ["zewtyO"]
            },
            update: {
              allow: ["LjiJcONWDd"]
            },
            delete: {
              allow: ["kBOymyouMm"]
            },
            share: {
              allow: ["yKxMWgJgoz"]
            }
          },
          created: "lRiFMI",
          modified: "JJaJCqELHrP",
          image: "QIhoa",
          discoverable: "pYsDUqi"
        },
        pathname: "/spaces/CVtpvZmXRha",
        path: "/spaces/CVtpvZmXRha"
      }
    }
  }
};
