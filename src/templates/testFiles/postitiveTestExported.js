module.exports = {
  test: function() {
    return api["get"]("endpoint + /listSpaces", {}).then(res => {
      return Promise.resolve({
        success: _.isEqual(res.data, {
          count: DYD,
          spaces: [
            {
              ID: YrTCZYEJ,
              name: ALeXKpX,
              creator: zcaIGtyGIwZ,
              created: ugCwMNYmZ,
              numberOfMembers: hDQgaXZVOk
            }
          ]
        })
      });
    });
  }
};
