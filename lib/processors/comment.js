/**
 * Module dependencies
 */

module.exports = function(css) {
  return css.replace(/^( *)\/\/(.*)/, function(_, ws, match) {
    return ws + '/**' + match + ' **/';
  });
};
