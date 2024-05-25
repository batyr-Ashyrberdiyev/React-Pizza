/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mainYellowBg: '#FFDF8C',
        textBlack: '#1B1B1B',
        textGray: '#2C2C2C',
        textGray2: '#7B7B7B',
        orange: '#FE5F1E',
      },
    },
  },
  plugins: [],
};
