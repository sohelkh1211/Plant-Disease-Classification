/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        sm:"650px",
        md:"768px",
        lg:"1024px",
        xs: "250px",
      },
      backgroundImage: {
        "Leaf1": "url('/src/assets/Leaf1.avif')",
        "Leaf2": "url('/src/assets/Leaf2.avif')",
        "Leaf3": "url('/src/assets/Leaf3.png')",
        "Leaf4": "url('/src/assets/Leaf4.png')",
        "Plant1": "url('/src/assets/Plant1.jpg')",
        "Leaf5": "url('/src/assets/Leaf5.webp')",
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '50%': '50%',
        '16': '4rem',
      },
    },
  },
  plugins: [],
};