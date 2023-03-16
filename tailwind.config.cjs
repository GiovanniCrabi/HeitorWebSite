module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      screens: {
        'sm': '300px',
        // => @media (min-width: 300px) { ... }
  
        'md': '960px',
        // => @media (min-width: 960px) { ... }
  
        'lg': '1440px',
        // => @media (min-width: 1440px) { ... }
      },
    extend: {
      colors: { 
        'yellow.5': '#eab308',
        'yellow.4': '#facc15',
        'yellow.3': '#fde047',

        'black.5':'#171717',
        'black.4':'#27272a',

        'white.5': '#f1f5f9',
        'white.4': ''
      }
    },
  },
  plugins: [],
}