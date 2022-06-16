module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        ApercuBlack: 'ApercuBlack, sans',
        ApercuBold: 'ApercuBold, sans',
        ApercuMedium: 'ApercuMedium, sans',
        ApercuRegular: 'ApercuRegular, sans',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
