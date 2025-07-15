/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
                satoshi: ['Satoshi', 'sans-serif'],
            },
            colors: {
                alo: {
                    DEFAULT: '#ff0055',
                    dark: '#cc0044',
                    light: '#ff3366',
                },
            },
        },
    },
    plugins: [],
}