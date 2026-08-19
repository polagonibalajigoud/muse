/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        muse: {
          bg: '#FAF7F2',
          card: '#F2EDE4',
          border: '#E3DDD0',
          text: '#171717',
          muted: '#6B6862',
          cobalt: '#0047AB',
          vermilion: '#E34234',
          lilac: '#B8A1D9',
          yellow: '#E5C158',
        }
      },
      fontFamily: {
        display: ['Syne', 'Cormorant Garamond', 'serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'slow-spin': 'spin 30s linear infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-reverse': 'floatReverse 9s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(2deg)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(14px) rotate(-3deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.85, transform: 'scale(1.03)' },
        }
      }
    },
  },
  plugins: [],
}
