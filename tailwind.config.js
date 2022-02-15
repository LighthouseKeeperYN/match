module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
      },
      fontFamily: {
        body: ['Roboto', 'Helvetica', 'sans-serif'],
        display: ['Roboto', 'Helvetica', 'sans-serif'],
      },
      colors: {
        orange: '#F6CA65',
        blue: '#005B96',
      }
    },
  }
}