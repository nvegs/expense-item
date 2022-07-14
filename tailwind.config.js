module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
       animation: {
        slide_down: 'slide_down 300ms ease-out forwards',
      },

      keyframes: {

        slide_down : {
          '0%': {opacity: 0, transform: 'translateY(-3rem)'},
          '100%' : {opacity: 1, transform: 'translateY(0)'}, 
        },

      },
    },
  },
  plugins: [],
}
