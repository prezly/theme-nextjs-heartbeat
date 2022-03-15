module.exports = {
    content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './modules/**/*.{ts,tsx}'],
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
        // eslint-disable-next-line import/no-extraneous-dependencies
        require('@tailwindcss/typography'),
    ],
};
