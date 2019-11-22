module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    jsx: true,
    useJSXTextNode: true
  },
  extends: [
    'airbnb-typescript'
  ],
  env: {
    browser: true
  }
}