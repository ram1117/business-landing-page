import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

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
        "footer-bg": "url('/footer-bg.svg')",
        button: "linear-gradient(to right, #fe8367, #fe6f98)",
        "button-hover": "linear-gradient(to right,  #fe6f98, #fe8367)",
      },
      fontFamily: {
        poppins: "var(--font-poppins)",
        bungee: "var(--font-bungee)",
      },
      keyframes: {
        bottomtop: {
          "0%": {
            transform: "translateY(-5vh)",
          },

          "100%": {
            transform: "translateY(-25vh)",
          },
        },
        bottomtopright: {
          "0%": {
            transform: "translateY(-5vh) translateX(0) ",
          },
          "100%": {
            transform: "translateY(-20vh) translateX(-2vw)",
          },
        },
        leftright: {
          "0%": {
            transform: "translateY(-5vh) translateX(8vw)",
          },

          "100%": {
            transform: "translateY(-30vh) translateX(25vw)",
          },
        },
        slideleft: {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
        colorchange: {
          "0%": { backgroundColor: "transparent" },
          "100%": { backgroundColor: "#ffffff" },
        },
        showborder: {
          "0%": { boxShadow: "0 0 0 0px #ffffff" },
          "100%": { boxShadow: "0 0 0 2px #fe7783" },
        },
        slightspin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(50deg)" },
        },
        expandletters: {
          "0%": { letterSpacing: "0rem" },
          "100%": { letterSpacing: "0.2rem" },
        },
        fadein: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadefromleft: {
          "0%": { opacity: "0", transform: "translateX(-15%)" },
          "100%": { opacity: "1", transform: "translateX(0%)" },
        },
        fadefromright: {
          "0%": { opacity: "0", transform: "translateX(15%)" },
          "100%": { opacity: "1", transform: "translateX(0%)" },
        },
        fadefrombottom: {
          "0%": { opacity: "0", transform: "translateY(15%)" },
          "100%": { opacity: "1", transform: "translateY(0%)" },
        },
      },
      animation: {
        vertical: "bottomtop 5s linear infinite",
        topleft: "bottomtopright 10s linear infinite",
        lefttoright: "leftright 10s linear infinite",
        slidepanel: "slideleft 500ms linear forward",
        changecolor: "colorchange 200ms linear forwards",
        showborder: "showborder 250ms ease-in-out forwards",
        slightspin: "slightspin 300ms ease-in-out forwards",
        expandletters: "expandletters 650ms linear forwards",
        fadein: "fadein 1s linear forwards",
        fadefromleft: "fadefromleft 500ms linear forwards",
        fadefromright: "fadefromright 500ms linear forwards",
        fadefrombottom: "fadefrombottom 500ms 100ms ease-in forwards",
      },

      backgroundColor: {
        divider: "#fe7783",
      },
      colors: {
        primary: "#fe7783",
        "text-primary": "#2E2E2E",
        "text-secondary": "#6A6972",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "animate-delay": (value: any) => ({
            animationDelay: value,
          }),
        },
        { values: theme("transitionDelay") },
      );
    }),
  ],
};
export default config;
