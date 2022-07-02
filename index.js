const objectMerge = require('object-merge');
const DEFAULTS = require('crip-css-properties');

const postcssCrip = (opts = {}) => {
  let PROPS = objectMerge(DEFAULTS, opts);

  return {
    postcssPlugin: 'postcss-crip',
    Once(root) {
      root.walkRules((rule) => {
        rule.each((decl) => {
          let { prop } = decl;

          if (!Object.prototype.hasOwnProperty.call(PROPS, prop)) return;

          let properties = PROPS[prop];

          properties.forEach((property, index) => {
            decl.cloneBefore({
              prop: properties[index],
              value: decl.value,
            });
          });

          decl.remove();
        });
      });
    },
  };
};

module.exports.postcss = true;
module.exports = postcssCrip;
