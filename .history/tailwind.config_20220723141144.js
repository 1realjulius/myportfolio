module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100% ' : {transform:'rotate(-15deg)'},
          '50%': {transform:'rotate(15deg)'},
        },
      },
      animation: {
        wiggle:'wiggle 1s ease-in-out infinite',
      },
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
