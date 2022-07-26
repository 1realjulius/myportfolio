module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        jello: {
          'from, 11.1%,to ': {
            transform: 'translate3d(0,0,0)'
          },
          '22.2%':{
            transform: 'skewX(-12.5deg) skewY(-12.5deg)',
          },
          '33.3%':{
            transform: 'skewX(6.25deg) skewY(6.25deg)',
          },
          '44.4%':{
            transform: 'skewX(-3.125deg) skewY(-3.125deg)',
          },
          '55.5%':{
            transform: 'skewX(1.562deg) skewY(1.562deg)',
          },
          '66.6%':{
            transform: 'skewX(-0.78125deg) skewY(-0.78125deg)',
          },
          '77.7%':{
            transform: 'skewX(0.390625deg) skewY(0.390625deg)',
          },
          '88.8%':{
            transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)',
          },
        },
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
        jello:'jello 2s infinite',
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
