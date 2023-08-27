const colors = require("tailwindcss/colors");
module.exports = {
    content: [
        "./screens/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            "accent-blue": "#4038D6",
            "accent-pink": "#EAA6F7",
            "accent-offwhite": "#F2F0E0",
            "accent-gray": "#808080",
            gray: colors.neutral,
            pink: colors.emerald,
        }
    }
}