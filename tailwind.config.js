/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#167d7f",
        secondary: "#75ab9a",
        tertiary: "#FFFFFF",
        button: "#68aeb0",
        "button-hover": "#00666f",
        "bg-gradient": "linear-gradient(to right, #75ab9a, #29a0b1, #167d7f)",
        text: "#1F2937",
        "text-secondary": "#FFFFFF",
        "text-accent": "#4B5563",
        link: "#3366FF",
        border: "#D1D5DB",
      },
      fontFamily: {
        sora: ["Sora", "sans-serif"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        shimmer: "shimmer 1.5s infinite linear",
      },
    },
  },
};
