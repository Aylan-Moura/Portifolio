/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            gridTemplateColumns: {
                'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
            },
            fontFamily: {
                Outfit: ["Outfit", "sans-serif"],
                Ovo: ["Ovo", "serif"],
                "Space-Grotesk": ["Space Grotesk", "sans-serif"],
                "JetBrains-Mono": ["JetBrains Mono", "monospace"],
                "Open-Sauce": ["Open Sauce Sans", "sans-serif"],
            },
            animation: {
                spin_slow: 'spin 6s linear infinite',
                'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
            },
            keyframes: {
                'glow-pulse': {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.7' },
                },
            },
            colors: {
                lightHover: '#f8fafc',
                darkHover: '#1e293b',
                darkTheme: '#0f172a',
                corporate: {
                    navy: '#1e3a8a',
                    blue: '#3b82f6',
                    slate: '#334155',
                    indigo: '#4338ca',
                },
                soft: {
                    slate: '#475569',
                    navy: '#1e293b',
                }
            },
            boxShadow: {
                'black': '4px 4px 0 #000',
                'white': '4px 4px 0 #fff',
                'corporate': '0 0 40px -10px rgba(30, 58, 138, 0.2)',
                'corporate-lg': '0 0 60px -15px rgba(30, 58, 138, 0.25)',
            },
            backgroundImage: {
                'grid-pattern': 'linear-gradient(rgba(30, 58, 138, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 58, 138, 0.03) 1px, transparent 1px)',
                'gradient-corporate': 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #4338ca 100%)',
            },
            backgroundSize: {
                'grid': '48px 48px',
            },
        },
    },
    plugins: [],
}