/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#167d7f",
        secondary: "#75ab9a",
        button: "#68aeb0",
        "button-hover": "#00666f",
        "bg-light": "#f7fafc",
        "bg-gradient": "linear-gradient(to right, #75ab9a, #29a0b1, #167d7f)",
        text: "#2d3748",
        link: "#4299e1",
        gray: "#808080",
      },
      spacing: {
        xs: "0.5rem",
        sm: "1rem",
        md: "2rem",
        lg: "4rem",
      },
      fontFamily: {
        sora: ["Sora", "sans-serif"],
      },
    },
  },
  plugins: [],
};
