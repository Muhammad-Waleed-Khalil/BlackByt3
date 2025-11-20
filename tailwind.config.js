/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'blood-red': '#ff1a33',
        'cyber-red': '#ff0000',
        'dark-red': '#8b0000',
      },
      fontFamily: {
        mono: ['Courier New', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'glitch': 'glitch 0.3s infinite',
        'scanline': 'scanline 6s linear infinite',
        'screen-shake': 'screen-shake 0.5s ease-in-out',
        'nuclear-pulse': 'nuclear-pulse 1s ease-in-out infinite',
      },
      boxShadow: {
        'red-glow': '0 0 10px rgba(255, 0, 0, 0.5), 0 0 20px rgba(255, 0, 0, 0.3)',
        'red-glow-intense': '0 0 20px rgba(255, 0, 0, 0.8), 0 0 40px rgba(255, 0, 0, 0.6), 0 0 60px rgba(255, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
}
