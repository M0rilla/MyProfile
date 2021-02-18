module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: { backgroundImage: theme => ({    
      'home': "url('../image/3.jpg')",
     })},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
