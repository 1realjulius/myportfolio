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
        wobble: {
          from: {
            transform: 'translate3d(0, 0, 0)',
          },
          '15%' : {
            transform: 'translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)',
          },
          '30%' : {
            transform: 'translate3d(25%, 0, 0) rotate3d(0, 0, 1, 3deg)',
          },
          '45%' : {
            transform: 'translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)',
          },
          '60%' : {
            transform: 'translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)',
          },
          '75%' : {
            transform: 'translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)',
          },
          to : {
            transform: 'translate3d(0, 0, 0)',
          },
        },
        headShake:{
          '0%': {
            transform: 'translateX(0)',
          },
          '6.5%': {
            transform: 'translateX(-6px) rotateY(-9deg)',
          },
          '18.5%': {
            transform: 'translateX(5px) rotateY(7deg)',
          },
          '31.5%': {
            transform: 'translateX(-3px) rotateY(-5deg)',
          },
          '45.5%': {
            transform: 'translateX(2px) rotateY(3deg)',
          },
          '50%': {
            transform: 'translateX(0)',
          },
        }
      },
      animation: {
        wiggle:'wiggle 1s ease-in-out infinite',
        wobble: 'wobble 1s infinite',
        headShake: 'headShake 2s infinite',
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
