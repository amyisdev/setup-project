/** @type {import("prettier").Config} */
module.exports = {
  singleQuote: true,
  printWidth: 120,
  semi: false,
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
};
