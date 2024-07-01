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
        primary: "#ED2224",
        sec: "#0D292A",
        redtext: "#B22222",
        border: "#E4E7EC",
        deepred: "#C70E10",
      },
    },
  },
  plugins: [],
};
