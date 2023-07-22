/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-bg-color": "#b7ffd5",
        "custom-expenseItem-bg-color": "#34495e",
        "custom-container-color": "#353841",
        "custom-price-color": "#323366",
        "custom-form-bg-color": "#a893e5",
        "custom-button-color": "#52076a",
        "custom-total-amount-color": "#FD8A8A",
      },
      fontFamily: {
        "customFont": ['Noto Sans JP', 'sans-serif'],
        "customFont2": ['Roboto Mono', 'monospace']
      }
    },
  },
  plugins: [],
}

