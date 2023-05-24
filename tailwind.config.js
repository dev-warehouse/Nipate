/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './design/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontSize: {
        content: ['1.25rem', { fontWeight: 500 }],
        'content-sm': ['0.825rem', { fontWeight: 400 }],
        'content-xs': ['0.75rem', { fontWeight: 400 }],
        'card-title': ['1.25rem', { fontWeight: 600 }],
        'card-description': ['1rem', { fontWeight: 400 }],
        'card-description-sm': ['0.825rem', { fontWeight: 400 }],
        'page-heading': ['1.25rem', { fontWeight: 600 }],
        'page-heading-sm': ['1rem', { fontWeight: 600 }],
        'page-hero': ['3rem', { fontWeight: 600, lineHeight: '3.625rem' }],
        'page-hero-sm': ['1.875rem', { fontWeight: 600, lineHeight: '2.25rem' }]
      },
      colors: {
        nipate: {
          DEFAULT: '#DF0000',
          yellow: '#FFDD00',
          gold: '#FF9900',
          text: {
            600: '#326976',
            700: '#346974',
            800: '#175764',
            900: '#014451',
            DEFAULT: '#346974'
          }
        },
        input: {
          DEFAULT: '#B9BCBD',
          background: '#F1F5F7'
        }
      }
    }
  },
  plugins: []
}
