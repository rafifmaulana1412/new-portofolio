/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00f5ff",
        secondary: "#ff006e",
        accent: "#8338ec",
        dark: "#0a0a0a",
        "dark-light": "#1a1a1a",
        "dark-lighter": "#2a2a2a",
      },
      fontFamily: {
        cyber: ["Orbitron", "monospace"],
        modern: ["Inter", "sans-serif"],
      },
      animation: {
        glow: "glow 2s ease-in-out infinite alternate",
        float: "float 3s ease-in-out infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        typing: "typing 3.5s ease-out, blink-caret .75s step-end infinite",
      },
      keyframes: {
        glow: {
          "0%": {
            boxShadow: "0 0 5px #00f5ff, 0 0 10px #00f5ff, 0 0 15px #00f5ff",
          },
          "100%": {
            boxShadow: "0 0 10px #00f5ff, 0 0 20px #00f5ff, 0 0 30px #00f5ff",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        "blink-caret": {
          "from, to": { borderColor: "transparent" },
          "50%": { borderColor: "#00f5ff" },
        },
      },
    },
  },
  plugins: [],
};
