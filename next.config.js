const withTypescript = require('@zeit/next-typescript');

module.exports = withTypescript({
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    // eslint-disable-next-line no-param-reassign
    config.node = {
      fs: 'empty',
    };

    return config;
  },
});
