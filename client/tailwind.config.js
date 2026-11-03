/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Syne: geometric, slightly angular display face.
        display: ["Syne", "sans-serif"],
        // Vazirmatn: Persian type family with a well-drawn Latin.
        sans: ["Vazirmatn", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      colors: {
        // Timurid tilework palette, sampled from Herat's glazed blues.
        ink: "#07142B",
        "ink-2": "#0A1C38",
        "ink-3": "#0E2446",
        lapis: "#123A77",
        tile: "#2BA3A8",
        saffron: "#E9A13B",
        glaze: "#E9EFF3",
        "glaze-2": "#D8E2EA",
        muted: "#8DA2BE",
      },
      maxWidth: {
        page: "78rem",
      },
      keyframes: {
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        drift: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        rise: {
          from: { opacity: "0", transform: "translateY(18px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "spin-slow": "spin-slow 90s linear infinite",
        "spin-slower": "spin-slow 140s linear infinite reverse",
        drift: "drift 7s ease-in-out infinite",
        rise: "rise 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};
