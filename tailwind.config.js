/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // BU SATIR ÇOK ÖNEMLİ
  content: [
    "./*.html",
    "./assets/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'brand-bg': 'var(--bg-color)',
        'brand-text': 'var(--text-color)',
        'brand-primary': '#5C6F5A',
        'brand-card': 'var(--card-bg)',
      }
    },
  },
  plugins: [],
}