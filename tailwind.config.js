module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: { // px
      'h4': '400px',
      'h6': '600px',
      'h8': '800px',
      'k1': '1000px',
      'k15': '1500px',
      'k2': '2000px',
      'k25': '2500px',
      'k3': '3000px',
      'k35': '3500px',
    },
    extend: {
      colors: {
        neutral: '#e5e7eb',
      },
      keyframes: {
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
