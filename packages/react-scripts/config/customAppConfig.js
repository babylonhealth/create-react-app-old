const { existsSync } = require('fs');
const paths = require('./paths');

const getSassOptions = () => {
  if (existsSync(paths.scssOverridesSrc)) {
    return {
      data: `@import '${paths.scssOverridesSrc}';`,
    };
  }
  return {};
};

module.exports = {
  getSassOptions,
};
