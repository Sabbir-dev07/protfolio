/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#0a0a0f", // Deep Charcoal/Off-black
                primary: "#c084fc", // Neon Purple (Hire Button Shade)
                secondary: "#c084fc", // Matching Hire Button Shade
                tertiary: "#111117", // Card Background
                "black-100": "#1a1a23",
                "black-200": "#0f0f16",
                "white-100": "#f0f4ff", // High contrast off-white
            },
            fontFamily: {
                sans: ['Orbitron', 'sans-serif'],
                display: ['Orbitron', 'sans-serif'],
                orbitron: ['Orbitron', 'sans-serif'],
                body: ['Orbitron', 'sans-serif'],
                heading: ['Orbitron', 'sans-serif'],
            },
            animation: {
                'spin-slow': 'spin 8s linear infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-15px)' },
                }
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
}
