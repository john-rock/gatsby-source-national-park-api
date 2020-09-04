"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

const fetch = require("node-fetch");

exports.sourceNodes = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)(function* ({
    actions,
    createNodeId,
    createContentDigest
  }, options) {
    try {
      const apiKey = options.apiKey;
      const res = yield fetch(`https://developer.nps.gov/api/v1/parks?limit=100&api_key=${apiKey}`);
      const data = yield res.json();
      data.data.forEach(park => {
        const node = Object.assign({}, park, {
          id: createNodeId(`park-${park.id}`),
          internal: {
            type: "National__Park",
            contentDigest: createContentDigest(park)
          }
        });
        actions.createNode(node);
      });
    } catch (error) {
      console.log(error);
    }
  });

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();