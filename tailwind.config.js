module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screen: {
      sm: "540px",
      // => @media (min-width: 576px) { ... }

      md: "720px",
      // => @media (min-width: 768px) { ... }

      lg: "960px",
      // => @media (min-width: 992px) { ... }

      xl: "1140px",
      // => @media (min-width: 1200px) { ... }

      "2xl": "1320px",
      // => @media (min-width: 1400px) { ... }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
