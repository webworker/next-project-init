const withTypescript = require('@zeit/next-typescript');
const withCss = require('@zeit/next-css');

// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.css'] = () => {};
}

module.exports = withCss(
  withTypescript({
    webpack: (config) => {
      // Fixes npm packages that depend on `fs` module
      // eslint-disable-next-line no-param-reassign
      config.node = {
        fs: 'empty',
      };

      return config;
    },
  }),
);
