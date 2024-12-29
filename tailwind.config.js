/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./assets/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#75ab9a",
        secondary: "#29a0b1",
        accent: "#167d7f",
        button: "#68aeb0",
        "button-hover": "#00666f",
      },
    },
  },
  plugins: [],
};
