/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jakarta: "calc(--jakrata)",
      },
    },
    backgroundImage: {
      button: "linear-gradient(to right, #00fffc, #5c23ff, #ebc1ff)",
      "button-hover": "linear-gradient(to right, #ebc1ff, #00fffc, #5c23ff)",
    },
  },
  plugins: [],
};
