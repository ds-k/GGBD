module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      md: "510px",
      lg: "1100px",
    },
    fontFamily: {
      main: ["Gowun Batang", "serif"],
      sub: ["Noto Sans KR", "sans-serif"],
    },
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        blue: {
          main: "#0984C0",
        },
        black: {
          main: "#2c2c2b",
        },
        gray: {
          main: "#565759",
          sub: "#AAA7B0",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
