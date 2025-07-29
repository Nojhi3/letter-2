/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        blush: "#FFDDE4",         // Header bg
        rosePink: "#C6447B",      // Header text
        deepPurple: "#6A0DAD",    // Alternate text
        twilightLilac: "#E2D3F7", // Gallery bg
        indigo: "#4B0082",
        mauve: "#8B5FBF",
        princessPurple: "#CBA1FF", // Gift bg
        softGold: "#F4D160",       // Gift highlight
      },
      fontFamily: {
        fancy: ["'Pacifico'", "cursive"],
      },
    },
  },
  plugins: [],
}
