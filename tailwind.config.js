// /** @type {import('tailwindcss').Config} */
// import { theme } from './tailwind.config';
// module.exports = {
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",

//     // Or if using `src` directory:
//     "./src/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
    
//     extend: {
//       animation: {
//         orbit: "orbit calc(var(--duration)*1s) linear infinite",
//       },
//       keyframes: {
//         orbit: {
//           "0%": {
//             transform:
//               "rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)",
//           },
//           "100%": {
//             transform:
//               "rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)",
//           },
//         },
//       },
//     },
//   },
  
//   plugins: [],
// };


// tailwind.config.js

const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const flattenColorPalette = require('tailwindcss/lib/util/flattenColorPalette').default;

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        orbit: "orbit calc(var(--duration)*1s) linear infinite",
      },
      keyframes: {
        orbit: {
          "0%": {
            transform: "rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)",
          },
        },
      },
    },
  },
  plugins: [
    addVariablesForColors,
  ],
};
