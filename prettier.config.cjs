/** @type {import("prettier").Config} */

const tailwindPlugin = 'prettier-plugin-tailwindcss';

module.exports = {
    trailingComma: 'all',
    singleQuote: true,
    tabWidth: 4,
    printWidth: 100,
    arrowParens: 'avoid',
    semi: true,
    plugins: [tailwindPlugin],
};
