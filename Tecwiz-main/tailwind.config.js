/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#F8F3EE',
          50: '#FDFAF7',
          100: '#F8F3EE',
          200: '#F0E7DD',
          300: '#E5D8C9',
        },
        chocolate: {
          DEFAULT: '#2B140A',
          50: '#4A2B1A',
          100: '#3A1F12',
          200: '#2B140A',
          300: '#1E0D06',
          400: '#160905',
        },
        secondary: '#4A2B1A',
        accent: {
          DEFAULT: '#0F766E',
          light: '#14B8A6',
          dark: '#0B5A53',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.25rem',
      },
      boxShadow: {
        soft: '0 4px 20px -2px rgba(43, 20, 10, 0.06)',
        'soft-lg': '0 12px 40px -4px rgba(43, 20, 10, 0.10)',
        'soft-xl': '0 24px 60px -8px rgba(43, 20, 10, 0.14)',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
};
