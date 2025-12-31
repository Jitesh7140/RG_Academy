/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        tablet: { min: '765px', max: '1020px' },
      },
    },
  },
  plugins: [],
};
