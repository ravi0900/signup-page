/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: { fontFamily: { lato: "Lato" } },
    colors: {
      gray: { "100": "#808080", "200": "#0f112f" },
      white: "#fff",
      teal: "#2a9ed5",
    },
    fontSize: {
      sm: "11px",
      base: "12px",
      lg: "13px",
      xl: "16px",
      "2xl": "18px",
      "3xl": "21px",
    },
  },
  corePlugins: { preflight: false },
};
