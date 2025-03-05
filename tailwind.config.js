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
        neon: {
          blue: "#00f3ff",
          purple: "#7700ff",
          pink: "#ff00e5",
          green: "#00ff9d",
        },
        holo: {
          light: "rgba(255, 255, 255, 0.1)",
          DEFAULT: "rgba(255, 255, 255, 0.05)",
          dark: "rgba(0, 0, 0, 0.2)",
        },
        space: {
          dark: "#0a0a0f",
          light: "#1a1a2f",
        },
      },
      fontFamily: {
        future: ["var(--font-future)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        glow: "glow 2s ease-in-out infinite alternate",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        holographic: "holographic 2s ease-in-out infinite",
      },
      keyframes: {
        glow: {
          "0%": {
            textShadow:
              "0 0 10px rgba(0,243,255,0.5), 0 0 20px rgba(0,243,255,0.3)",
          },
          "100%": {
            textShadow:
              "0 0 20px rgba(0,243,255,0.8), 0 0 30px rgba(0,243,255,0.5)",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        holographic: {
          "0%": { filter: "hue-rotate(0deg) brightness(1)" },
          "50%": { filter: "hue-rotate(180deg) brightness(1.2)" },
          "100%": { filter: "hue-rotate(360deg) brightness(1)" },
        },
      },
      backdropFilter: {
        glass: "blur(16px) saturate(180%)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "cyber-grid":
          "linear-gradient(rgba(0,243,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,243,255,0.1) 1px, transparent 1px)",
      },
      backgroundSize: {
        "cyber-grid": "100px 100px",
      },
    },
  },
  plugins: [],
};
