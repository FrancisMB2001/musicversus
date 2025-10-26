const colors = require('tailwindcss/colors')

module.exports = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Graphik', 'sans-serif'],
                serif: ['Merriweather', 'serif'],
                jersey: ["Jersey 10", 'sans-serif'],
            },
        },
    },
    plugins: [require('daisyui')],
}



