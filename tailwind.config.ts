import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#fff8ed",
          100: "#ffefd4",
          200: "#ffd9a8",
          300: "#ffbc71",
          400: "#ff9438",
          500: "#ff7611",
          600: "#f05c07",
          700: "#c74508",
          800: "#9e360f",
          900: "#7f2f10",
          950: "#451508",
        },
        surface: {
          bg:      "#0f0f0f",
          card:    "#1a1a1a",
          border:  "#2a2a2a",
          muted:   "#3a3a3a",
          overlay: "rgba(0,0,0,0.7)",
        },
      },
      fontFamily: {
        display: ["var(--font-bricolage)", "sans-serif"],
        body:    ["var(--font-manrope)", "sans-serif"],
      },
      animation: {
        "slide-up":   "slideUp 0.3s ease-out",
        "fade-in":    "fadeIn 0.2s ease-out",
        "fade-in-up": "fadeInUp 0.6s ease-out both",
        pulse_dot:    "pulseDot 2s ease-in-out infinite",
        marquee:      "marquee 28s linear infinite",
        "marquee-reverse": "marqueeReverse 28s linear infinite",
      },
      keyframes: {
        slideUp: {
          "0%":   { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%":      { opacity: "0.5", transform: "scale(0.8)" },
        },
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeReverse: {
          "0%":   { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
