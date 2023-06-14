module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        keyframes: {
          fadein: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' }
          }
        },
        animation: {
          fadein: 'fadein 2s ease-in forwards'
        }
      },
    },
    plugins: [],
  }
  