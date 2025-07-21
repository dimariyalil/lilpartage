/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#082b53',
          green: '#34cc67',
          white: '#ffffff',
          pink: '#ff00ff',
        },
        gradient: {
          blue: '#2a4974',
          green: '#3eed77',
        },
        accent: {
          pink: '#ff00ff',
        },
      },
      fontFamily: {
        'tektur': ['Tektur ExtraBold', 'sans-serif'],
        'nairi': ['Nairi Normal', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-pattern': 'linear-gradient(135deg, #2a4974 0%, #3eed77 100%)',
      },
      animation: {
        'pattern-slide': 'slide 20s linear infinite',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
}