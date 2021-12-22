module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
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
      typography: {
        DEFAULT: {
          css: {
            h1: {
              color: "#2c2c2b",
              fontSize: "1.875em",
            },
            h2: {
              color: "#2c2c2b",
            },
            p: {
              color: "#565759",
            },
            blockquote: {
              color: "#2c2c2b",
            },
            b: {
              color: "#0984C0",
            },
          },
        },
      },
      width: {
        sm: "320px",
        md: "700px",
        lg: "1032px",
      },
      height: {
        sm: "220px",
        md: "500px",
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
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
