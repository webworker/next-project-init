module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: 'babel-eslint',
  parserOptions: {},
  extends: ['airbnb', 'plugin:prettier/recommended', 'prettier/react'],
  // add your custom rules here
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
  },
};
