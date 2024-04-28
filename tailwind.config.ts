import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/atoms/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "main-bg": "url('/main-bg.svg')",
        button: "linear-gradient(to right, #fe8367, #fe6f98)",
        "button-hover": "linear-gradient(to right,  #fe6f98, #fe8367)",
      },
      fontFamily: {
        poppins: "var(--font-poppins)",
        comfortaa: "var(--font-comfortaa)",
      },
      keyframes: {
        bottomtop: {
          " 0%:": {
            transform: "translateY(-10vh)",
            opacity: "1",
          },

          "100%": {
            transform: "translateY(-25vh)",
            opacity: "0",
          },
        },
        bottomtopright: {
          " 0%:": {
            transform: "translateY(-10vh) translateX(0) ",
            opacity: "1",
          },
          "50%": {
            transform: "translateY(-20vh) translateX(-10vw)",
          },
          "100%": {
            transform: "translateY(-10vh) translateX(-2vw)",
            opacity: "0",
          },
        },
        leftright: {
          " 0%:": {
            transform: "translateY(-10vh) translateX(8vw)",
            opacity: "1",
          },
          "50%": {
            transform: "translateY(-30vh) translateX(10vw)",
          },
          "100%": {
            transform: "translateY(-10vh) translateX(25vw)",
            opacity: "0",
          },
        },
        slideleft: {
          " 0%:": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
      },
      animation: {
        vertical: "bottomtop 5s linear infinite",
        topleft: "bottomtopright 10s linear infinite",
        lefttoright: "leftright 10s linear infinite",
        slidepanel: "slideleft 500ms linear forward",
      },
    },
  },
  plugins: [],
};
export default config;
