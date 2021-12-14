module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./hooks/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      md: "600px",
      lg: "1100px",
    },
    fontFamily: {
      main: ["Gowun Batang", "serif"],
      sub: ["Noto Sans KR", "sans-serif"],
      google: ["Roboto", "sans-serif"],
    },
    extend: {
      width: {
        sm: "320px",
        md: "700px",
        lg: "1032px",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        blue: {
          main: "#0984C0",
          sub: "#60BDD1",
        },
        black: {
          main: "#2c2c2b",
        },
        gray: {
          main: "#565759",
          sub: "#AAA7B0",
        },
        kakao: {
          container: "#FEE500",
          label: "#000000",
        },
        google: {
          label: "#757575",
        },
        toggle: {
          pink: "#F28F8F",
          yellow: "#FCE44D",
        },
      },
      fill: {
        blue: {
          main: "#0984C0",
          sub: "#60BDD1",
        },
      },
      dropShadow: {
        base: "0px 0px 4px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  variants: {
    extend: {
      fontWeight: ["hover"],
      textColor: ["active"],
      backgroundColor: ["active"],
      borderColor: ["active"],
      fill: ["active"],
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
