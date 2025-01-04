/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx,scss,css}"],
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
    },
  },
  plugins: [],
};
