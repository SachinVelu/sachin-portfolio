/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      boxShadow: {
        'custom': '4px 4px 0 0 #14b8a6'
      },
      colors: {
        'scroll-thumb': '#495670',
        'scroll-track': '#0f172a',
      },
    },
    rotate:{
      'x-180':{transform:"rotateX(180deg)"}
    },
    keyframes: {
      "fade-in-down": {
        "0%": {
          transform: "translateY(-100px)",
        },
        "100%": {
          transform: "translateY(0)",
        },
      },
      pulse: {
        '0%, 100%': { opacity: 1 },
        '50%': { opacity: 0.5 },
      },
      shake:{
        '0%': { transform: 'translateX(0) rotate(0deg)' },
          '25%': { transform: 'translateX(-2px) rotate(-5deg)' },
          '50%': { transform: 'translateX(2px) rotate(5deg)' },
          '75%': { transform: 'translateX(-2px) rotate(-5deg)' },
          '100%': { transform: 'translateX(0) rotate(0deg)' },
      },
      rotateX:{
          '0%': { transform: 'rotateY(0deg)' },
          '50%': { opacity: 0, transform: 'rotateY(90deg)' },
          '100%': { opacity: 1, transform: 'rotateY(180deg)' }
      },
      flipContent: {
        '0%': { transform: 'rotateY(0deg)' }, // Start with normal orientation
        '50%': { opacity: 0, transform: 'rotateY(90deg)' }, // At halfway, hide and rotate
        '100%': { opacity: 1, transform: 'rotateY(180deg)' } // Fully rotated at 180 degrees
      }
    },
    animation: {
      "fade-in-down": "fade-in-down 1s ease-out",
      shake: "shake 0.5s ease-in-out",
      pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      rotateX: 'rotateX 3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      flipContent: 'flipContent 3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.hide-scrollbar': {
          'scrollbar-width': 'none', /* Firefox */
          '-ms-overflow-style': 'none', /* Internet Explorer 10+ */
        },
        '.hide-scrollbar::-webkit-scrollbar': {
          'display': 'none', /* WebKit (Chrome, Safari) */
        }
      });
    },
    require('@tailwindcss/line-clamp'),
    require('tailwind-scrollbar'),
  ],
  darkMode: "selector",
};
