/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './assets/js/**/*.js'],
  future: { hoverOnlyWhenSupported: true },
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#0B1F3A', 900: '#071528', 800: '#0B1F3A', 700: '#13305A', 600: '#1B3F72' },
        brand: { DEFAULT: '#005CA9', 50: '#EAF3FB', 100: '#D3E6F6', 300: '#6FB0E6', 400: '#3A92D8', 600: '#004E91', 700: '#003F75' },
        accent: { DEFAULT: '#F39200', 400: '#FFA524', 600: '#D98200' },
        off: '#F7F8FA',
        ink: { DEFAULT: '#0B1F3A', soft: '#3D4F68', mute: '#5A6B82' },
        line: '#E3E8EF',
      },
      fontFamily: {
        display: ['Sora', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: { '4xl': '2rem' },
      boxShadow: {
        soft: '0 1px 2px rgba(11,31,58,.04), 0 8px 24px -8px rgba(11,31,58,.10)',
        lift: '0 2px 4px rgba(11,31,58,.05), 0 20px 40px -16px rgba(11,31,58,.22)',
        cta: '0 6px 16px -6px rgba(0,0,0,.4)',
        glass: '0 10px 30px -10px rgba(3,12,28,.55)',
      },
      maxWidth: { content: '72rem' },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.23, 1, 0.32, 1)',
        'in-out': 'cubic-bezier(0.77, 0, 0.175, 1)',
      },
    },
  },
  plugins: [],
};
