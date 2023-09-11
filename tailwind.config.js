/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Poppins',
    },
    container: {
      padding: {
        DEFAULT: '30px',
        lg: '0',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    extend: {
      colors: {
        text: '#222222',
        primary: '#F5E6E0',
        secondary: '#F99C80',
        tertiary: '#A86B5C',
        quatenary: '#C8A199',
      },
      backgroundImage: {
        hero: "url('./img/vinyl-toystore.png')",
      },
    },
  },
  plugins: [],
};
