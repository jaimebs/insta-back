module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true
  },
  extends: 'airbnb-base',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    'linebreak-style': 0,
    'global-require': 0,
    'import/no-unresolved': 'off',
    'comma-dangle': ['error', 'never']
  }
};
