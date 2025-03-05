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
        mono: {
          100: "#ffffff",
          200: "#e0e0e0",
          300: "#c0c0c0",
          400: "#a0a0a0",
          500: "#808080",
          600: "#606060",
          700: "#404040",
          800: "#202020",
          900: "#101010",
          950: "#050505",
        },
        accent: {
          primary: "#00f0ff",
          secondary: "#00a0aa",
          dim: "rgba(0, 240, 255, 0.1)",
        },
        bg: {
          dark: "#030303",
          DEFAULT: "#050505",
          light: "#101010",
        },
      },
      fontFamily: {
        mono: ["var(--font-mono)", "monospace"],
        display: ["var(--font-display)", "sans-serif"],
      },
      fontSize: {
        xs: "0.65rem",
        sm: "0.75rem",
        base: "0.85rem",
        lg: "1rem",
        xl: "1.15rem",
        "2xl": "1.35rem",
        "3xl": "1.65rem",
      },
      animation: {
        "scan-line": "scan-line 2s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        flicker: "flicker 3s linear infinite",
      },
      keyframes: {
        "scan-line": {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(100%)" },
        },
        flicker: {
          "0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%": {
            opacity: 0.99,
          },
          "20%, 21.999%, 63%, 63.999%, 65%, 69.999%": { opacity: 0.4 },
        },
      },
      backgroundImage: {
        "grid-lines":
          "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(circle at center, rgba(5,5,5,0.8) 0%, rgba(3,3,3,1) 70%)",
      },
      backgroundSize: {
        "grid-lines": "20px 20px",
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
    },
  },
  plugins: [],
};
