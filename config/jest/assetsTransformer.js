/**
 * Created by gilangaramadan on 17-12-17.
 */

const path = require('path');

module.exports = {
  process(src, filename, config, options) {
    return `module.exports = ${JSON.stringify(path.basename(filename))};`;
  },
};
