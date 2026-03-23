/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#020817',
          900: '#0A1628',
          800: '#0F2044',
          700: '#162856',
        },
        blue: {
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
        },
        cyan: {
          400: '#22D3EE',
          500: '#06B6D4',
        },
        slate: {
          50:  '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          400: '#94A3B8',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
      },
      fontFamily: {
        inter:   ['Inter', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #020817 0%, #0A1628 50%, #0F2044 100%)',
        'gradient-card': 'linear-gradient(to bottom, transparent 40%, rgba(2,8,23,0.92) 100%)',
        'gradient-blue': 'linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'card': '0 4px 24px rgba(0,0,0,0.08)',
        'card-hover': '0 8px 40px rgba(37,99,235,0.18)',
        'blue': '0 4px 24px rgba(37,99,235,0.35)',
      },
    },
  },
  plugins: [],
}
