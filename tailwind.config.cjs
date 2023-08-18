/** @type {import('tailwindcss').Config} */
module.exports = {
    corePlugins: {
        preflight: false,
    },
    content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {},
    },
    important: '#__next',
    plugins: [],
};
