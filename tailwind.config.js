/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./app.vue",
    ],
    theme: {
        extend: {
            fontFamily: {
                'primary': ['DM Sans', 'sans-serif'],
                'secondary': ['Poppins', 'sans-serif'],
                'cursive': ['Righteous', 'cursive']
            },
        }
    },
    daisyui: {
        themes: [
            {
                mytheme: {   
                    "primary": "#bdf5fc",
                    "secondary": "#4deaae",
                    "accent": "#de35fc",
                    "neutral": "#201F33",                          
                    "base-100": "#3E273F",
                    "info": "#9CADF2",
                    "success": "#63E9DE",
                    "warning": "#EB9328", 
                    "error": "#F56695",
                },
            },
        ],
    },
    plugins: [require("daisyui")],
}
