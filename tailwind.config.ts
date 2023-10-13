const withMT = require('@material-tailwind/react/utils/withMT')

module.exports = withMT({
  content: ['./pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: '#ffffff',
    },
    extend: {},
  },
  plugins: [],
})
