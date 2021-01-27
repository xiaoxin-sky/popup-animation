module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    mocha: true
  },
  extends: ["eslint:recommended", "plugin:vue/essential"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 6
    // sourceType: "module"
  },
  plugins: ["vue", "html"],
  rules: {}
};
