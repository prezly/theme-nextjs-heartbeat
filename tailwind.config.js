module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './modules/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'media',
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
            },
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
};
