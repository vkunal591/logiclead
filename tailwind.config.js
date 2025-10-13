// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",       // app router
    "./pages/**/*.{js,ts,jsx,tsx}",     // pages router
    "./components/**/*.{js,ts,jsx,tsx}",// components
    "./src/**/*.{js,ts,jsx,tsx}",       // optional - if you use src/
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
      },
      colors: {
        // Primary color defined as a function so slash-opacity (eg. bg-primary/20)
        // works reliably.
        primary: ({ opacityValue, opacityVariable }) => {
          // rgb(25,135,84) is #198754
          if (opacityValue !== undefined) {
            return `rgba(25,135,84,${opacityValue})`;
          }
          if (opacityVariable !== undefined) {
            return `rgba(25,135,84,var(${opacityVariable}))`;
          }
          return "#198754";
        },
        // Optional named helpers
        "primary-light": "#41a65c",
        "primary-dark": "#146c43",
      },
    },
  },
  plugins: [],
};
