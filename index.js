var postcss = require('postcss');

module.exports = postcss.plugin('postcss-crip', function () {

    var PROPS = {
      'bg':  ['background'],
      'bgc': ['background-color'],
      'bgz': ['background-size'],
      'bd':  ['border'],
      'b':   ['bottom'],
      'c':   ['color'],
      'd':   ['display'],
      'fl':  ['float'],
      'f':   ['font'],
      'ff':  ['font-family'],
      'fz':  ['font-size'],
      'fs':  ['font-style'],
      'fw':  ['font-weight'],
      'h':   ['height'],
      'l':   ['left'],
      'ls':  ['letter-spacing'],
      'lh':  ['line-height'],
      'lis': ['list-style'],
      'mah': ['max-height'],
      'mih': ['min-height'],
      'maw': ['max-width'],
      'miw': ['min-width'],
      'm':   ['margin'],
      'mt':  ['margin-top'],
      'mr':  ['margin-right'],
      'mb':  ['margin-bottom'],
      'ml':  ['margin-left'],
      'p':   ['padding'],
      'pt':  ['padding-top'],
      'pr':  ['padding-right'],
      'pb':  ['padding-bottom'],
      'pl':  ['padding-left'],
      'r':   ['right'],
      'ta':  ['text-align'],
      'td':  ['text-decoration'],
      'ti':  ['text-indent'],
      'tt':  ['text-transform'],
      't':   ['top'],
      'vv':  ['vertical-align'],
      'v':   ['visibility'],
      'w':   ['width'],
      'ws':  ['white-space'],
      'zi':  ['z-index']
    };

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
