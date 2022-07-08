module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        ApercuBold: 'ApercuBold, sans',
        ApercuMedium: 'ApercuMedium, sans',
        cadizMedium: 'cadizMedium, sans',
        cadizBold: 'cadizBild, sans',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
