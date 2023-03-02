const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite;',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        grey: {
          DEFAULT: '#b8c2cc',
          lightest: '#f8fafc',
          lighter: '#f1f5f8',
          light: '#dae1e7',
          dark: '#8795a1',
          darker: '#606f7b',
          darkest: '#3d4852',
        },
        'bb-dark': '#141f2c',
        independent: '#63b4c7',
        enterprise: '#6398c7',
        link: '#38a89d',
        teal: '#4dc0b5',
        token: '#42ada0',
        raise: '#37acae',
        trade: '#4299ae',
        wallet: '#427dad',
        blue: {
          DEFAULT: '#3490dc',
          lighter: '#bcdefa',
          light: '#6cb2eb',
          dark: '#2779bd',
        }
      },
      backgroundImage: {
        'dark-grey': 'url(@/assets/svgs/dark-grey.jpg)',
        'hero-grey': 'url(@/assets/svgs/hero-grey.jpg)',
        'hero-bottom': 'url(@/assets/svgs/hero-shape-bg.svg)',
      },
      borderRadius: {
        3: '3px',
      },
      backgroundSize: {
        100: '100% auto',
        500: '500px 500px'
      },
      backgroundPosition: {
        'top-center': 'top center',
        'bottom-center': 'bottom center',
      }
    },
  },
  // prettier-ignore
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
