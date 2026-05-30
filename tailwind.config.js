/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0085ff',
          cyan: '#00bfff',
          pale: '#e0f4ff',
        },
        surface: {
          base: '#0a0a0f',
          elevated: '#13131a',
          field: '#1a1a24',
        },
        border: {
          subtle: '#252530',
        },
        tech: {
          cyan: '#00e5ff',
          blue: '#448aff',
          purple: '#b388ff',
          green: '#69f0ae',
          orange: '#ffab40',
          red: '#ff5252',
        }
      },
      fontFamily: {
        sans: ['"SF Pro Display"', '"SF Pro Text"', '-apple-system', 'BlinkMacSystemFont', '"Helvetica Neue"', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
