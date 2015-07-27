var postcss = require('postcss');

/**
 * Merge two objects into one object.
 *
 * @param {object} obj1
 * @param {object} obj2
 *
 * @return {object}
 */

function merge(obj1, obj2) {
    for (var key in obj1) {
        if (obj2[key] === undefined) {
            obj2[key] = obj1[key];
        } else if (obj2[key] instanceof Array) {
            for (var child in obj1[key]) {
                if (obj2[key].indexOf(obj1[key][child]) !== -1) {
                    obj2[key].push(obj1[key][child]);
                }
            }
        } else if (typeof obj2[key] === 'string') {
            obj2[key] = [obj2[key]];
            for (var kid in obj1[key]) {
                if (obj2[key].indexOf(obj1[key][kid]) !== -1) {
                    obj2[key].push(obj1[key][kid]);
                }
            }
        }
    }

    return obj2;
}

module.exports = postcss.plugin('postcss-crip', function (options) {

    options = options || {};

    var DEFAULTS = require('./crip-properties.json');

    var PROPS = merge(DEFAULTS, options);

    return function (css) {

        css.eachRule(function (rule) {
            rule.each(function(decl) {

                var prop = decl.prop;

                if (!PROPS.hasOwnProperty(prop)) return;

                var properties = PROPS[prop];

                properties.forEach(function (property, index) {
                    decl.cloneBefore({
                        prop: properties[index],
                        value: decl.value
                    });
                });

                decl.removeSelf();

            });
        });

    };
});
