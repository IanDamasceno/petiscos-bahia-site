/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        baloo: ["'Baloo 2'", "sans-serif"],
        worksans: ["'Work Sans'", "sans-serif"],
      },
      colors: {
        preto: "#111014",
        "preto-2": "#19171d",
        amarelo: "#F5C518",
        "amarelo-2": "#FFE27A",
        vermelho: "#C21E2A",
        "vermelho-escuro": "#7A1420",
        creme: "#FBF3DE",
        "creme-suave": "#c9c4b6",
      },
      keyframes: {
        floatY: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        ribbonIn: {
          from: { opacity: 0, transform: "translateY(-14px) rotate(-8deg)" },
          to: { opacity: 1, transform: "translateY(0) rotate(-2deg)" },
        },
        titleIn: {
          from: { opacity: 0, transform: "translateY(18px) scale(.97)" },
          to: { opacity: 1, transform: "translateY(0) scale(1)" },
        },
        modalFadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        modalScaleIn: {
          from: { opacity: 0, transform: "scale(.94) translateY(12px)" },
          to: { opacity: 1, transform: "scale(1) translateY(0)" },
        },
      },
      animation: {
        float: "floatY 4s ease-in-out infinite",
        "ribbon-in": "ribbonIn .6s cubic-bezier(0.34,1.56,0.64,1) both",
        "title-in": "titleIn .8s ease-out .15s both",
        "modal-fade-in": "modalFadeIn .2s ease-out both",
        "modal-scale-in": "modalScaleIn .25s cubic-bezier(0.34,1.56,0.64,1) both",
      },
    },
  },
  plugins: [],
};
