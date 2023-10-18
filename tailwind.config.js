/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        dynamic: "clamp(1.5rem, 3.4vw, 3.5rem)",
      },
    },
  },
  plugins: [],
};
