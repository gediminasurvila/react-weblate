module.exports = {
  locales: ["en"],
  output: "public/translations/locales/$LOCALE.json",
  input: ["src/**/*.{js,jsx,ts,tsx}"],
  keySeparator: false,
  namespaceSeparator: false,
  defaultValue: "",
  createOldCatalogs: false,
  sort: true,
  lexers: {
    js: ["JavascriptLexer"],
    ts: ["JavascriptLexer"],
    jsx: ["JsxLexer"],
    tsx: ["JsxLexer"],
  },
};
